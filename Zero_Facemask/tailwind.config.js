module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors:{
        primary: '#CAE094',
        secondary: '#FF1257',
        maincolor:'#DBDBDB',
        bgcolor:'#2a231d',
        footercolor:'#828282',
        opacitycolor:'rgba(255, 255, 255, 0.15)',
        opacityformtext:'rgba(255, 255, 255, 0.3)',
        form:'#191919',
        formtext:'5e5e5e',
        checkbox:'#CAE094',
        checkboxopacity:'rgba(202, 224, 148, 0.3)',
        arrow:'#535353',
        bordermain:'rgba(255, 255, 255, 0.08)',
      },
      fontfamily:{
        primary_font: ['Bebas-Neue-Bold'],
      },
      letterSpacing: {
        business: '0.44em',
        article:'2.375rem',
      },
      fontSize: {
        main: '5.375rem',
        mainmd:'2.64rem',
        phonemain: '3.438rem',
        orderinformation:'0.813rem',
      },
      spacing:{
        right: "50%",
        left:"50%",
      },
      borderOpacity: {

      },
      inset: {
        fifty:'-120',
      },
      zIndex: {
        minus:'-2',
      },
      lineHeight: {
        confirmationText:'2.375rem'
      },
      maxWidth: {
        article:'36.25rem',
        confirmation:'30rem',
      },
      width:{
        'business':'8.625rem',
        'contenttext':'478px',
        'footermenu':'346.81px',
      },
      height:{
        'orderinformation':'13px',
        'contenttext':'233px',
      },
      screens: {
        'none':'0px',
      },
      margin:{
        'headerMx':'8.125rem',
        'headline':'563px',
      },
      padding:{
        'maintexthere':'0.406rem',
        'secondmaintexthere':'0.533rem',
        'pcsInput':'0.313rem',
        'classicinput':'0.657rem',
        'button':'0.875rem',
        'calculate':'0.969rem',
        'footermenu':'0.938rem',
        'footermenulast':'0.907rem',
        'zerofooter':'28.54px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive','hover','focus','active'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
