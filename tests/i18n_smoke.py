"""PT/EN/ES regression checks. Run with the Vite server on port 5173.
Requires Python Playwright and Chromium: pip install playwright && playwright install chromium.
Third-party Spotify requests are isolated here; the actual iframe URLs are checked.
"""
import os
from playwright.sync_api import sync_playwright, expect

BASE = os.environ.get('BASE_URL', 'http://127.0.0.1:5173')
ROUTES = ['inicio', 'banda', 'integrantes', 'discografia', 'agenda', 'contato']
WIDTHS = [320, 375, 390, 540, 768, 900, 1024, 1280, 1440]
LANGS = {'pt': 'pt-BR', 'en': 'en', 'es': 'es'}
DEVELOPMENT = {
    'pt': 'Site desenvolvido por Aliana Moraes e Bruna Alves.',
    'en': 'Site developed by Aliana Moraes and Bruna Alves.',
    'es': 'Sitio desarrollado por Aliana Moraes y Bruna Alves.',
}
ROLES = {'pt': {'bruna-tsuruda': 'Guitarra', 'juliana-salgado': 'Bateria'}, 'en': {'bruna-tsuruda': 'Guitar', 'juliana-salgado': 'Drums'}, 'es': {'bruna-tsuruda': 'Guitarra', 'juliana-salgado': 'Batería'}}
BIOS = {'pt': 'Cantora e atriz brasileira', 'en': 'Brazilian singer and actress', 'es': 'Cantante y actriz brasileña'}
TRACKS = [
    'Down The Walls', 'Yesterday (My End, My Beginning)', 'Veneno', 'Fear', 'After',
    'Como Se Fosse Hoje', 'Bulletproof', 'So Sweet', 'Aversão', "I'm Sorry", 'Dead Like You',
    'A Noite Vai Ferver', 'Prioridades', 'Quem Vai Saber?', 'Pecado Capital', 'Ao Mesmo Tempo',
    'O Que Te Faz Bem?', 'Disso Que Eu Gosto', 'Mais Um Gole', 'Cada Escolha Uma Renúncia',
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.route('https://open.spotify.com/**', lambda route: route.abort())
    page.goto(BASE)
    expect(page.locator('html')).to_have_attribute('lang', 'pt-BR')
    expect(page.locator('#site-language')).to_have_value('pt')

    for language, html_lang in LANGS.items():
        page.locator('#site-language').select_option(language)
        for width in WIDTHS:
            page.set_viewport_size({'width': width, 'height': 844})
            for route in ROUTES:
                page.goto(f'{BASE}/#/{route}')
                page.evaluate('document.fonts.ready')
                expect(page.locator('html')).to_have_attribute('lang', html_lang)
                expect(page.locator('#site-language')).to_have_value(language)
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (language, width, route)
                expect(page.locator('.footer-development')).to_be_visible()
                expect(page.locator('.footer-development')).to_have_text(DEVELOPMENT[language])
                expect(page.locator('.footer-copyright > span').first).to_contain_text('CENTRAL MALVADA')
                assert 'Central Malvada' in page.title()
                assert page.locator('meta[name="description"]').get_attribute('content')
        page.set_viewport_size({'width': 1440, 'height': 900})
        page.goto(f'{BASE}/#/integrantes')
        for member in ['bruna-tsuruda', 'rafaela-reoli', 'cyz-mendes', 'juliana-salgado']:
            card = page.locator(f'[data-member-id="{member}"]')
            assert member in card.locator('img').get_attribute('src')
            if member in ROLES[language]:
                expect(card.locator('.member-meta > span')).to_have_count(1)
                expect(card.locator('.member-meta')).to_have_text(ROLES[language][member].upper())
            card.locator('button').click()
            expect(page.locator('dialog')).to_be_visible()
            if member in ROLES[language]:
                expect(page.locator('.dialog-role')).to_have_text(ROLES[language][member])
            if member == 'cyz-mendes':
                expect(page.locator('.dialog-bio')).to_contain_text(BIOS[language])
                expect(page.locator('.dialog-bio')).to_contain_text('Cyntia Mendes')
            page.keyboard.press('Escape')
            expect(page.locator('dialog')).to_have_count(0)
            expect(card.locator('button')).to_be_focused()
        page.goto(f'{BASE}/#/discografia')
        assert page.locator('.track-name').all_text_contents() == TRACKS
        assert page.locator('.spotify-embed').count() == 2
        for embed in page.locator('.spotify-embed').all():
            assert 'https://open.spotify.com/embed/album/' in embed.get_attribute('src')
            assert embed.get_attribute('title')
        page.reload()
        expect(page.locator('#site-language')).to_have_value(language)
        print(f'{language}: routes, responsive layout, biographies, tracks, persistence OK')

    page.locator('#site-language').select_option('en')
    album = page.locator('.music-album').first
    album.get_by_role('tab').nth(1).click()
    album.locator('.credits-toggle').click()
    page.evaluate('window.originalEmbed = document.querySelector(".spotify-embed")')
    page.locator('#site-language').select_option('es')
    assert page.evaluate('window.originalEmbed === document.querySelector(".spotify-embed")')
    expect(album.get_by_role('tab').nth(1)).to_have_attribute('aria-selected', 'true')
    expect(album.locator('.credits-toggle')).to_have_attribute('aria-expanded', 'true')
    expect(album.locator('.music-credits-content')).to_contain_text('Producido por Giu Daga')
    expect(album.locator('.music-credits-content')).to_contain_text('Indira Castillo')
    expect(album.locator('img')).to_have_attribute('alt', 'Portada oficial del álbum Malvada')
    album.get_by_role('tab').nth(1).focus()
    page.keyboard.press('Home')
    expect(album.get_by_role('tab').first).to_have_attribute('aria-selected', 'true')
    page.keyboard.press('End')
    expect(album.get_by_role('tab').nth(1)).to_have_attribute('aria-selected', 'true')

    page.goto(f'{BASE}/#/contato')
    page.fill('#name', 'Pessoa de teste')
    page.fill('#email', 'teste@example.com')
    page.fill('#message', 'Esta mensagem deve continuar exatamente como escrevi.')
    page.locator('#site-language').select_option('en')
    expect(page.locator('#name')).to_have_value('Pessoa de teste')
    expect(page.locator('#message')).to_have_value('Esta mensagem deve continuar exatamente como escrevi.')
    page.locator('button[type=submit]').click()
    draft = page.locator('#form-result textarea')
    expect(draft).to_have_value('To: Central Malvada — fan club\nFrom: Pessoa de teste <teste@example.com>\n\nEsta mensagem deve continuar exatamente como escrevi.')
    page.locator('#site-language').focus()
    page.locator('#site-language').select_option('es')
    expect(draft).to_have_value('Para: Central Malvada — club de fans\nDe: Pessoa de teste <teste@example.com>\n\nEsta mensagem deve continuar exatamente como escrevi.')
    expect(page.locator('#fan-disclaimer-title')).to_have_text('SOMOS UN CLUB DE FANS.')
    assert page.evaluate('Object.keys(localStorage)') == ['central-malvada.language']
    expect(page.locator('#site-language')).to_be_focused()
    page.fill('#name', '')
    page.locator('button[type=submit]').click()
    assert page.locator('#name').evaluate('(el) => el.validationMessage') == 'Introduce tu nombre.'

    page.set_viewport_size({'width': 320, 'height': 844})
    page.goto(BASE)
    expect(page.locator('#site-language')).to_be_visible()
    expect(page.locator('.global-nav')).not_to_be_visible()
    page.locator('.menu-toggle').click()
    expect(page.locator('.global-nav')).to_be_visible()
    page.locator('#site-language').focus()
    page.locator('#site-language').select_option('en')
    expect(page.locator('.global-nav')).not_to_be_visible()
    expect(page.locator('#site-language')).to_be_focused()
    expect(page.locator('.menu-toggle')).to_have_text('MENU')

    page.goto(f'{BASE}/#/integrantes')
    page.locator('[data-bio="cyz-mendes"]').click()
    page.evaluate('window.dispatchEvent(new StorageEvent("storage", {key:"central-malvada.language",newValue:"es"}))')
    expect(page.locator('.dialog-bio')).to_contain_text(BIOS['es'])
    page.keyboard.press('Escape')

    page.evaluate('localStorage.setItem("central-malvada.language", "invalid")')
    page.reload()
    expect(page.locator('#site-language')).to_have_value('pt')
    blocked = browser.new_context()
    blocked.add_init_script('''Storage.prototype.getItem = function(){throw new DOMException('Blocked','SecurityError')};
        Storage.prototype.setItem = function(){throw new DOMException('Blocked','SecurityError')};''')
    blocked_page = blocked.new_page()
    blocked_page.on('pageerror', lambda error: errors.append(str(error)))
    blocked_page.goto(BASE)
    blocked_page.locator('#site-language').select_option('en')
    expect(blocked_page.locator('html')).to_have_attribute('lang', 'en')
    expect(blocked_page.locator('#statement-title')).to_contain_text('THE POWER')
    assert not errors, errors
    blocked.close()
    context.close()
    browser.close()
    print('Locale state, accessibility, contact privacy and unavailable storage OK. JS errors: []')
