/* @ds-bundle: {"format":4,"namespace":"GaiaSGuideDesignSystem_8179f3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MapMarker","sourcePath":"components/data/MapMarker.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"801f72331128","components/core/Button.jsx":"7c7c0335c61e","components/core/Tag.jsx":"8fa46ef8e9ed","components/data/MapMarker.jsx":"55920b91a564","components/feedback/Callout.jsx":"016e444ec0b0","components/forms/Checkbox.jsx":"4f0745cc51e2","components/forms/Input.jsx":"34573f65b61b","components/forms/Radio.jsx":"efa048ea3057","components/forms/Select.jsx":"fee74cbfcf60","components/layout/Card.jsx":"e8e64e8c6bd6","components/navigation/Tabs.jsx":"d4bc5eaa6fab","doc-page.js":"5957844bb066","ui_kits/atlas/ArchiveView.jsx":"4b8a28dd1bdc","ui_kits/atlas/MapView.jsx":"c04c3eac7335","ui_kits/atlas/VignetteView.jsx":"b754f370976d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GaiaSGuideDesignSystem_8179f3 = window.GaiaSGuideDesignSystem_8179f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  ink: {
    bg: 'var(--ink-900)',
    color: '#fff'
  },
  pink: {
    bg: 'var(--pink-500)',
    color: '#fff'
  },
  chartreuse: {
    bg: 'var(--chartreuse-500)',
    color: 'var(--ink-900)'
  },
  coral: {
    bg: 'var(--coral-500)',
    color: '#fff'
  },
  lavender: {
    bg: 'var(--lavender-500)',
    color: 'var(--ink-900)'
  },
  paper: {
    bg: 'var(--color-bg)',
    color: 'var(--ink-900)'
  }
};
function Badge({
  children,
  tone = 'ink'
}) {
  const t = TONES[tone] || TONES.ink;
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      background: t.bg,
      color: t.color,
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      padding: '4px 9px',
      display: 'inline-block',
      fontWeight: 700
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--color-primary)',
    color: '#fff',
    border: 'var(--ink-900)'
  },
  coral: {
    bg: 'var(--coral-500)',
    color: '#fff',
    border: 'var(--ink-900)'
  },
  ghost: {
    bg: 'var(--color-bg)',
    color: 'var(--ink-900)',
    border: 'var(--ink-900)'
  },
  inverse: {
    bg: 'var(--ink-900)',
    color: '#fff',
    border: 'var(--ink-900)'
  }
};
const SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 13
  },
  md: {
    padding: '12px 22px',
    fontSize: 15
  },
  lg: {
    padding: '16px 28px',
    fontSize: 17
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    disabled,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '.01em',
      textTransform: 'uppercase',
      background: v.bg,
      color: v.color,
      border: `var(--border-width-block) solid ${v.border}`,
      borderRadius: 'var(--radius-none)',
      boxShadow: disabled ? 'none' : 'var(--shadow-block-sm)',
      padding: s.padding,
      fontSize: s.fontSize,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translate(2px,2px)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translate(0,0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(0,0)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return React.createElement('button', {
    onClick,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.04em',
      background: selected ? 'var(--ink-900)' : 'var(--color-bg)',
      color: selected ? '#fff' : 'var(--ink-900)',
      border: '2px solid var(--ink-900)',
      borderRadius: 999,
      padding: '6px 14px',
      cursor: 'pointer',
      fontWeight: 400
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/MapMarker.jsx
try { (() => {
const TONES = {
  pink: 'var(--pink-500)',
  coral: 'var(--coral-500)',
  chartreuse: 'var(--chartreuse-500)',
  lavender: 'var(--lavender-500)'
};
function MapMarker({
  tone = 'pink',
  label,
  active = false
}) {
  const bg = TONES[tone] || TONES.pink;
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('div', {
    style: {
      width: active ? 28 : 22,
      height: active ? 28 : 22,
      background: bg,
      border: '3px solid var(--ink-900)',
      transform: 'rotate(45deg)',
      boxShadow: active ? 'var(--shadow-block-sm)' : 'none'
    }
  }), label && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      background: 'var(--ink-900)',
      color: '#fff',
      padding: '2px 6px'
    }
  }, label));
}
Object.assign(__ds_scope, { MapMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MapMarker.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
const TONES = {
  note: {
    bg: 'var(--paper-50)',
    accent: 'var(--ink-900)'
  },
  source: {
    bg: 'var(--lavender-100)',
    accent: 'var(--ink-900)'
  },
  content: {
    bg: '#fff',
    accent: 'var(--pink-500)'
  }
};
function Callout({
  label,
  children,
  tone = 'note'
}) {
  const t = TONES[tone] || TONES.note;
  return React.createElement('div', {
    style: {
      background: t.bg,
      border: '2px solid var(--ink-900)',
      borderTop: `var(--border-width-heavy) solid ${t.accent}`,
      padding: 16
    }
  }, label && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 'var(--leading-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      background: checked ? 'var(--ink-900)' : 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      flexShrink: 0
    }
  }, checked ? '✕' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text'
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-mono)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      font: 'inherit',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      padding: '10px 12px',
      border: 'var(--border-width-block) solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      background: 'var(--color-bg)',
      color: 'var(--ink-900)',
      outline: 'none'
    },
    onFocus: e => e.target.style.boxShadow = '0 0 0 3px var(--color-focus)',
    onBlur: e => e.target.style.boxShadow = 'none'
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      border: '2px solid var(--ink-900)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-mono)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: '10px 12px',
      border: 'var(--border-width-block) solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      background: 'var(--color-bg)',
      color: 'var(--ink-900)'
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  tone = 'paper',
  image
}) {
  const bg = tone === 'ink' ? 'var(--ink-900)' : tone === 'pink' ? 'var(--pink-100)' : 'var(--color-bg)';
  const color = tone === 'ink' ? '#fff' : 'var(--ink-900)';
  return React.createElement('div', {
    style: {
      border: 'var(--border-width-block) solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-block)',
      background: bg,
      color,
      overflow: 'hidden'
    }
  }, image && React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      display: 'block',
      borderBottom: 'var(--border-width-block) solid var(--ink-900)',
      maxHeight: 180,
      objectFit: 'cover'
    }
  }), React.createElement('div', {
    style: {
      padding: 18
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 6,
      opacity: .7
    }
  }, eyebrow), title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 8
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 'var(--leading-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      borderBottom: 'var(--border-width-block) solid var(--ink-900)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '.03em',
      padding: '10px 18px',
      border: 'none',
      cursor: 'pointer',
      background: active === t ? 'var(--ink-900)' : 'transparent',
      color: active === t ? '#fff' : 'var(--ink-900)',
      marginBottom: -4
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      if (!document.querySelector('doc-page')) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><slot></slot></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      this._vars.textContent = ':host{' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/atlas/ArchiveView.jsx
try { (() => {
const {
  Badge
} = window.GaiaSGuideDesignSystem_8179f3;
const EDITIONS = [{
  year: '1983',
  ed: '9th',
  img: '../../assets/covers/gaias-guide-1983-lavender.png',
  tone: 'lavender'
}, {
  year: '1987',
  ed: '12th',
  img: '../../assets/covers/gaias-guide-1987-coral.png',
  tone: 'coral'
}, {
  year: '1988',
  ed: '13th',
  img: '../../assets/covers/gaias-guide-1988-chartreuse.png',
  tone: 'chartreuse'
}, {
  year: '1990/91',
  ed: '15th',
  img: '../../assets/covers/gaias-guide-1990-91-pink.png',
  tone: 'pink'
}];
function AtlasArchiveView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      margin: '0 0 24px'
    }
  }, "Edition Archive"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, EDITIONS.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.year,
    style: {
      width: 180,
      border: 'var(--border-width-block) solid var(--ink-900)',
      boxShadow: 'var(--shadow-block)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: e.img,
    style: {
      width: '100%',
      display: 'block',
      borderBottom: 'var(--border-width-block) solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, e.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone
  }, e.ed, " Edition")))))));
}
window.AtlasArchiveView = AtlasArchiveView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atlas/ArchiveView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atlas/MapView.jsx
try { (() => {
const {
  Tag,
  Card,
  MapMarker,
  Button
} = window.GaiaSGuideDesignSystem_8179f3;
const VENUES = [{
  id: 'saarein',
  name: 'Saarein',
  city: 'Amsterdam',
  tone: 'coral',
  cat: 'Bars & Clubs',
  top: '32%',
  left: '48%'
}, {
  id: 'labyris',
  name: 'Labyris Books',
  city: 'Washington DC',
  tone: 'chartreuse',
  cat: 'Bookstores',
  top: '40%',
  left: '28%'
}, {
  id: 'sisterhood',
  name: 'Sisterhood Bookstore',
  city: 'Los Angeles',
  tone: 'chartreuse',
  cat: 'Bookstores',
  top: '46%',
  left: '12%'
}, {
  id: 'gaias',
  name: 'Gaia Community Center',
  city: 'Sydney',
  tone: 'lavender',
  cat: 'Community Centers',
  top: '75%',
  left: '86%'
}, {
  id: 'wow',
  name: 'WOW Café',
  city: 'New York',
  tone: 'coral',
  cat: 'Bars & Clubs',
  top: '35%',
  left: '30%'
}];
const CATS = ['Bars & Clubs', 'Bookstores', 'Community Centers'];
function AtlasMapView({
  onOpenVignette
}) {
  const [active, setActive] = React.useState(null);
  const [filters, setFilters] = React.useState(CATS);
  const toggle = c => setFilters(f => f.includes(c) ? f.filter(x => x !== c) : [...f, c]);
  const shown = VENUES.filter(v => filters.includes(v.cat));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      borderRight: 'var(--border-width-block) solid var(--ink-900)',
      padding: 20,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Filter Venues"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 20
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: filters.includes(c),
    onClick: () => toggle(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Listings (", shown.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, shown.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    onClick: () => setActive(v.id),
    style: {
      cursor: 'pointer',
      padding: '8px 10px',
      border: '2px solid var(--ink-900)',
      background: active === v.id ? 'var(--pink-100)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: .7
    }
  }, v.city))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: 'var(--paper-50)',
      backgroundImage: 'linear-gradient(var(--paper-100) 1px, transparent 1px), linear-gradient(90deg, var(--paper-100) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }
  }, shown.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    onClick: () => setActive(v.id),
    style: {
      position: 'absolute',
      top: v.top,
      left: v.left,
      cursor: 'pointer',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(MapMarker, {
    tone: v.tone,
    label: active === v.id ? v.name : undefined,
    active: active === v.id
  }))), active && (() => {
    const v = VENUES.find(x => x.id === active);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: 280
      }
    }, /*#__PURE__*/React.createElement(Card, {
      eyebrow: v.cat,
      title: v.name
    }, v.city, " \u2014 listed across multiple editions of Gaia's Guide.", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onOpenVignette(v.id)
    }, "Read Vignette"))));
  })()));
}
window.AtlasMapView = AtlasMapView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atlas/MapView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atlas/VignetteView.jsx
try { (() => {
const {
  Card,
  Badge,
  Callout,
  Tag
} = window.GaiaSGuideDesignSystem_8179f3;
const VIGNETTES = [{
  id: 'saarein',
  title: 'Saarein: A Café of One\u2019s Own',
  era: '1978\u20131999',
  tag: 'Bars & Clubs',
  img: '../../assets/covers/gaias-guide-1987-coral.png',
  body: 'When Saarein opened in an Amsterdam canal house in 1978, it listed itself with Gaia\u2019s Guide within the year \u2014 one of hundreds of venues that used the directory as its only advertising channel, precisely because it was safer than a storefront sign.'
}, {
  id: 'labyris',
  title: 'The Bookstore as Dropsite',
  era: '1975\u20131990',
  tag: 'Bookstores',
  img: '../../assets/covers/gaias-guide-1988-chartreuse.png',
  body: 'Feminist bookstores like Labyris did double duty: retail space by day, mail-forwarding dropsite by night. Gaia\u2019s Guide printed dropsite addresses instead of home addresses to protect contributors\u2019 privacy.'
}, {
  id: 'gaias',
  title: 'Mapping the Antipodes',
  era: '1983\u20131991',
  tag: 'Community Centers',
  img: '../../assets/covers/gaias-guide-1990-91-pink.png',
  body: 'Later editions expanded aggressively into Australia and New Zealand, tracking a second wave of community-center building that mirrored, with a decade\u2019s lag, the US networks of the mid-1970s.'
}];
function AtlasVignetteView({
  openId
}) {
  const [openTag, setOpenTag] = React.useState('all');
  const active = VIGNETTES.find(v => v.id === openId) || VIGNETTES[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      borderRight: 'var(--border-width-block) solid var(--ink-900)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Vignettes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, VIGNETTES.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.id,
    eyebrow: v.era,
    title: v.title,
    tone: active.id === v.id ? 'pink' : 'paper'
  }, v.tag)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '32px 40px',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, active.era), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      lineHeight: 'var(--leading-tight)',
      margin: '14px 0'
    }
  }, active.title), /*#__PURE__*/React.createElement("img", {
    src: active.img,
    style: {
      width: 180,
      border: 'var(--border-width-block) solid var(--ink-900)',
      boxShadow: 'var(--shadow-block)',
      float: 'right',
      marginLeft: 20,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 'var(--leading-body)',
      color: 'var(--color-text)'
    }
  }, active.body), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    label: "Source Note",
    tone: "source"
  }, "Cross-referenced against the ", active.era.split('\u2013')[0], " and ", active.era.split('\u2013')[1], " print editions held in the project\\u2019s scan archive."))));
}
window.AtlasVignetteView = AtlasVignetteView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atlas/VignetteView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MapMarker = __ds_scope.MapMarker;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
