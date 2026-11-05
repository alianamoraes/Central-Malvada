"""Optional browser smoke tests. Run dev server, then: python tests/smoke.py.
Requires Python package playwright and a Chromium installation.
"""
import os
from playwright.sync_api import sync_playwright, expect

BASE_URL = os.environ.get('BASE_URL', 'http://127.0.0.1:5173')
MEMBERS = {
    'bruna-tsuruda': 'Bruna Tsuruda',
    'rafaela-reoli': 'Rafaela Reoli',
    'cyz-mendes': 'Cyz Mendes',
    'juliana-salgado': 'Juliana Salgado',
}
ROUTES = ['inicio', 'banda', 'integrantes', 'discografia', 'agenda', 'contato']

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 960})
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(BASE_URL + '/#/integrantes')
    for identity, name in MEMBERS.items():
        photo = page.locator(f'[data-portrait="{identity}"] img')
        photo.evaluate('image => image.decode()')
        assert identity in photo.get_attribute('src'), f'Wrong asset identity: {identity}'
        assert name in photo.get_attribute('alt'), f'Wrong alt identity: {identity}'
        trigger = page.locator(f'[data-bio="{identity}"]')
        trigger.click()
        expect(page.locator('#dialog-name')).to_have_text(name, ignore_case=True)
        page.keyboard.press('Escape')
        expect(trigger).to_be_focused()
    for width in [320, 375, 390, 540, 768, 900, 1024, 1280, 1440]:
        page.set_viewport_size({'width': width, 'height': 844})
        for route in ROUTES:
            page.goto(BASE_URL + '/#/' + route)
            page.evaluate('document.fonts.ready')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), (width, route)
    page.goto(BASE_URL + '/#/banda')
    expect(page.locator('.band-instagram')).to_have_attribute('href', 'https://www.instagram.com/malvadabanda')
    page.goto(BASE_URL + '/#/discografia')
    for album_id, count, first_track, last_track, spotify_id in [
        ('malvada-2025', 11, 'Down The Walls', 'Dead Like You', '739N3Id0REt99az8lA9VXF'),
        ('a-noite-vai-ferver-2021', 9, 'A Noite Vai Ferver', 'Cada Escolha Uma Renúncia', '6JPNyDhUmZvazyTBfj21Lq'),
    ]:
        album = page.locator(f'[data-album-id="{album_id}"]')
        expect(album.locator('iframe')).to_have_attribute('src', f'https://open.spotify.com/embed/album/{spotify_id}?utm_source=generator&theme=0')
        album.get_by_role('tab', name='Faixas').click()
        expect(album.locator('.library-tracklist')).to_be_visible()
        expect(album.locator('.library-tracklist li')).to_have_count(count)
        expect(album.locator('.track-name').first).to_have_text(first_track)
        expect(album.locator('.track-name').last).to_have_text(last_track)
        album.locator('.credits-toggle').click()
        expect(album.locator('.music-credits-content')).to_be_visible()
        album.locator('.credits-toggle').click()
        expect(album.locator('.music-credits-content')).not_to_be_visible()
    page.goto(BASE_URL + '/#/contato')
    expect(page.locator('#fan-disclaimer-title')).to_have_text('SOMOS UM FÃ-CLUBE.')
    page.locator('#name').fill('Fã da Central')
    page.locator('#email').fill('teste@example.com')
    page.locator('#message').fill('Sugestão de atualização da história do fã-clube.')
    page.locator('button[type=submit]').click()
    expect(page.locator('#form-result')).to_be_visible()
    assert 'fã-clube' in page.locator('#form-result textarea').input_value()
    assert not errors, errors
    browser.close()
print('Smoke tests passed: identities, routes, viewports, albums and contact draft.')
