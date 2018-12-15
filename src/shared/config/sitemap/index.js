import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';
import AboutSection from '../../components/sections/about';
import ServicesSection from '../../components/sections/services';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Apoyo Logístico',
      url: '/apoyo-logistico',
      component: ServicesSection,
    }, {
      title: 'Focus Groups',
      url: '/focus-groups',
      component: AboutSection,
    }],
  },
  icons: [{
    title: 'facebook',
    className: 'facebook',
    url: 'https://www.facebook.com/FocusInvestigacion',
  }, {
    title: 'twitter',
    className: 'twitter',
    url: 'https://twitter.com/@focus_bc/',
  }],
  addresses: [{
    title: 'Tijuana',
    tel: '(664) 634-1615 / 684-7425',
  }, {
    title: 'Mexicali',
    tel: '(686) 552-3672',
  }, {
    title: 'Ensenada',
    tel: '(686) 552-3672',
  }, {
    title: 'Farmacia de la Piel',
    tel: '(664) 684-8288',
  }],
};
