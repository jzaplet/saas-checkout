import PersonalInfo from '../views/PersonalInfo';
import SelectPlan from '../views/SelectPlan';
import PickAddons from '../views/PickAddons';
import FinishingUp from '../views/FinishingUp';
import ThankYou from '../views/ThankYou';

export const stepViews = [
  { num: 1, name: 'Your info', component: PersonalInfo },
  { num: 2, name: 'Select plan', component: SelectPlan },
  { num: 3, name: 'Add-ons', component: PickAddons },
  { num: 4, name: 'Summary', component: FinishingUp },
  { num: 5, name: 'Thank you', component: ThankYou },
];
