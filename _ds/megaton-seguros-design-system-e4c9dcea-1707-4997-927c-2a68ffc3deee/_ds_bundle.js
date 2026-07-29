/* @ds-bundle: {"format":4,"namespace":"MegatonSegurosDesignSystem_e4c9dc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"68b335813bdb","components/core/Button.jsx":"a6df9eeff1a1","components/feedback/Alert.jsx":"a16f0631ae6f","components/feedback/Avatar.jsx":"af083e7a72dd","components/feedback/Card.jsx":"bd6d48ffe7bc","components/forms/Input.jsx":"adb0153cc4d1","components/forms/Select.jsx":"2404d8c7e656","ui_kits/site/Footer.jsx":"a2257714d63b","ui_kits/site/Hero.jsx":"7ee62c3ef9da","ui_kits/site/ProductGrid.jsx":"ce10ecec2443","ui_kits/site/Testimonial.jsx":"e42d05cc9dfa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MegatonSegurosDesignSystem_e4c9dc = window.MegatonSegurosDesignSystem_e4c9dc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--gray-100)',
      color: 'var(--graphite-600)'
    },
    brand: {
      background: 'var(--red-50)',
      color: 'var(--red-600)'
    },
    success: {
      background: 'var(--success-bg)',
      color: '#188a3f'
    },
    warning: {
      background: 'var(--warning-bg)',
      color: '#b5760a'
    },
    danger: {
      background: 'var(--danger-bg)',
      color: '#c62d2d'
    },
    info: {
      background: 'var(--blue-50)',
      color: 'var(--blue-600)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-full)',
    height: size === 'sm' ? 40 : 'var(--button-height)',
    padding: size === 'sm' ? '0 20px' : '0 28px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: size === 'sm' ? 14 : 16,
    transition: 'background 150ms ease-out, transform 100ms ease-out',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--brand-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)'
    },
    whatsapp: {
      background: 'var(--whatsapp)',
      color: '#fff'
    }
  };
  return React.createElement('button', {
    style: {
      ...base,
      ...variants[variant]
    },
    disabled,
    onClick,
    onMouseEnter: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--red-600)';
    },
    onMouseLeave: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--brand-primary)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ICONS = {
  success: '✓',
  warning: '!',
  danger: '✕',
  info: 'i'
};
function Alert({
  tone = 'info',
  title,
  description
}) {
  const tones = {
    success: {
      bg: 'var(--success-bg)',
      fg: '#188a3f'
    },
    warning: {
      bg: 'var(--warning-bg)',
      fg: '#b5760a'
    },
    danger: {
      bg: 'var(--danger-bg)',
      fg: '#c62d2d'
    },
    info: {
      bg: 'var(--blue-50)',
      fg: 'var(--blue-600)'
    }
  }[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      padding: 16,
      borderRadius: 'var(--radius-default)',
      background: tones.bg,
      fontFamily: 'var(--font-body)',
      maxWidth: 340
    }
  }, [React.createElement('div', {
    key: 'ic',
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: tones.fg,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      flexShrink: 0,
      marginTop: 2
    }
  }, ICONS[tone]), React.createElement('div', {
    key: 'txt'
  }, [title && React.createElement('div', {
    key: 't',
    style: {
      fontWeight: 700,
      color: tones.fg,
      marginBottom: 2
    }
  }, title), description && React.createElement('div', {
    key: 'd',
    style: {
      color: 'var(--text-primary)',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, description)])]);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
function Avatar({
  src,
  initials,
  size = 44
}) {
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--red-100)',
    color: 'var(--red-600)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: size * 0.36,
    border: '2px solid #fff',
    boxShadow: 'var(--shadow-sm)'
  };
  if (src) return React.createElement('img', {
    src,
    style: {
      ...style,
      objectFit: 'cover'
    }
  });
  return React.createElement('div', {
    style
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function Card({
  title,
  description,
  icon,
  footer,
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 320
    }
  }, [icon && React.createElement('div', {
    key: 'icon',
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-default)',
      background: 'var(--red-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-primary)'
    }
  }, icon), title && React.createElement('div', {
    key: 't',
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--graphite-600)'
    }
  }, title), description && React.createElement('div', {
    key: 'd',
    style: {
      color: 'var(--text-secondary)',
      fontSize: 16,
      lineHeight: 1.5
    }
  }, description), children, footer && React.createElement('div', {
    key: 'f',
    style: {
      marginTop: 4
    }
  }, footer)]);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  placeholder,
  icon,
  type = 'text',
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--input-height)',
      borderRadius: 'var(--radius-input)',
      border: `1.5px solid ${focus ? 'var(--brand-tech)' : 'var(--border-default)'}`,
      padding: '0 16px',
      background: '#fff',
      transition: 'border-color 150ms ease-out'
    }
  }, [icon && React.createElement('span', {
    key: 'i',
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, icon), React.createElement('input', {
    key: 'inp',
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  })]);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  placeholder = 'Selecione uma opção',
  options = [],
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('select', {
    value: value || '',
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--input-height)',
      borderRadius: 'var(--radius-input)',
      border: `1.5px solid ${focus ? 'var(--brand-tech)' : 'var(--border-default)'}`,
      padding: '0 16px',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: value ? 'var(--text-primary)' : 'var(--text-muted)',
      background: '#fff',
      appearance: 'none',
      transition: 'border-color 150ms ease-out'
    }
  }, [React.createElement('option', {
    key: 'ph',
    value: '',
    disabled: true
  }, placeholder), ...options.map((o, i) => React.createElement('option', {
    key: i,
    value: o
  }, o))]);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
function Footer() {
  return React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, [React.createElement('div', {
    key: 'l',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [React.createElement('img', {
    key: 'logo',
    src: '../../assets/logo-megaton.png',
    style: {
      height: 24
    }
  }), React.createElement('div', {
    key: 'addr',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, 'Rua Delmira Ferreira, 119 cj 152 torre 2 — São Paulo/SP'), React.createElement('div', {
    key: 'ph',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, '+55 11 99951-0922 · megatonseguros.com.br')]), React.createElement('div', {
    key: 'r',
    style: {
      display: 'flex',
      gap: 32,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--graphite-600)'
    }
  }, [React.createElement('div', {
    key: 'p1'
  }, ['Produtos', React.createElement('div', {
    key: '1',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, 'Saúde'), React.createElement('div', {
    key: '2',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, 'Vida'), React.createElement('div', {
    key: '3',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, 'Auto')]), React.createElement('div', {
    key: 'p2'
  }, ['Empresa', React.createElement('div', {
    key: '1',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, 'Sobre'), React.createElement('div', {
    key: '2',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, 'Blog'), React.createElement('div', {
    key: '3',
    style: {
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, 'Contato')])])]);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
function Hero() {
  return React.createElement('div', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 32,
      background: '#fff'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 460,
      position: 'relative'
    }
  }, [React.createElement('div', {
    key: 'l',
    style: {
      padding: '64px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 20,
      zIndex: 2
    }
  }, [React.createElement('img', {
    key: 'logo',
    src: '../../assets/logo-megaton.png',
    style: {
      height: 32,
      objectFit: 'contain',
      alignSelf: 'flex-start'
    }
  }), React.createElement('h1', {
    key: 'h',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.08,
      color: 'var(--graphite-600)',
      margin: 0
    }
  }, ['Inteligência que protege o que ', React.createElement('span', {
    key: 's',
    style: {
      color: 'var(--brand-primary)'
    }
  }, 'realmente importa.')]), React.createElement('p', {
    key: 'p',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 420,
      margin: 0
    }
  }, 'Tecnologia, consultoria e atendimento humano para oferecer as melhores soluções em seguros para você, sua família e sua empresa.'), React.createElement('div', {
    key: 'cta',
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, [React.createElement('button', {
    key: 'b1',
    style: btnPrimary
  }, 'Cotação agora'), React.createElement('button', {
    key: 'b2',
    style: btnGhost
  }, 'Falar com um consultor')])]), React.createElement('div', {
    key: 'r',
    style: {
      position: 'relative',
      background: 'linear-gradient(135deg, var(--red-500), var(--red-700))',
      clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '40px 20px 0'
    }
  }, React.createElement('img', {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80',
    style: {
      width: '90%',
      maxHeight: 420,
      objectFit: 'cover',
      borderRadius: '24px 24px 0 0',
      boxShadow: 'var(--shadow-lg)'
    }
  })))]));
}
const btnPrimary = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 16,
  background: 'var(--brand-primary)',
  color: '#fff',
  border: 'none',
  borderRadius: 999,
  height: 52,
  padding: '0 28px',
  cursor: 'pointer'
};
const btnGhost = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 16,
  background: 'transparent',
  color: 'var(--graphite-600)',
  border: 'none',
  borderRadius: 999,
  height: 52,
  padding: '0 16px',
  cursor: 'pointer'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ProductGrid.jsx
try { (() => {
const PRODUCTS = [{
  name: 'Plano de Saúde',
  desc: 'As melhores operadoras, com consultoria técnica especializada.'
}, {
  name: 'Odontológico',
  desc: 'Cobertura completa para você e sua família.'
}, {
  name: 'Seguro de Vida',
  desc: 'Proteção financeira para quem você ama.'
}, {
  name: 'RC Médico',
  desc: 'Responsabilidade civil para profissionais da saúde.'
}, {
  name: 'Residencial',
  desc: 'Seu patrimônio protegido 24 horas por dia.'
}, {
  name: 'Auto',
  desc: 'Assistência completa e cobertura sob medida.'
}];
function ProductGrid() {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, PRODUCTS.map((p, i) => React.createElement('div', {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 24,
      padding: 32,
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [React.createElement('div', {
    key: 'ic',
    style: {
      width: 48,
      height: 48,
      borderRadius: 16,
      background: 'var(--red-50)',
      color: 'var(--brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 700
    }
  }, p.name[0]), React.createElement('div', {
    key: 't',
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--graphite-600)'
    }
  }, p.name), React.createElement('div', {
    key: 'd',
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, p.desc), React.createElement('a', {
    key: 'a',
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--brand-primary)',
      fontSize: 15,
      textDecoration: 'none'
    }
  }, 'Saiba mais →')])));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Testimonial.jsx
try { (() => {
function Testimonial() {
  return React.createElement('div', {
    style: {
      background: 'var(--gray-50)',
      borderRadius: 24,
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 560
    }
  }, [React.createElement('div', {
    key: 'q',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--graphite-600)',
      lineHeight: 1.4
    }
  }, '"A Megaton nos ajudou a encontrar a melhor solução para proteger nossa empresa. Atendimento excepcional."'), React.createElement('div', {
    key: 'p',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, [React.createElement('div', {
    key: 'av',
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--red-100)',
      color: 'var(--red-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontFamily: 'var(--font-body)'
    }
  }, 'MS'), React.createElement('div', {
    key: 'i'
  }, [React.createElement('div', {
    key: 'n',
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--graphite-600)'
    }
  }, 'Mariana Silva'), React.createElement('div', {
    key: 'r',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, 'Diretora Financeira')])])]);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Testimonial.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
