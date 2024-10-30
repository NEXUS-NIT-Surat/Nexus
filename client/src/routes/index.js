import Profile from '../pages/Profile/Profile'
import Settings from '../pages/Settings/Settings'
import Tables from '../pages/Tables/Tables'
import AdminPanel from '../pages/Dashboard/AdminPanel.jsx'
import { About, Achievements, AchievementsForm, AlumniMenu, Connect, CreateForm, Events, Forms, Home, NotFound, RegisterForm, Teams } from '../components'
import SignUpForm from '../components/SignUpForm/SignUpForm.jsx'
import LogInForm from '../components/LogInForm/LogInForm.jsx'
import UserProfile from '../components/Profile/Profile.jsx' 
import AllForms from '../pages/Forms/AllForms'
import CreatePanelForm from '../components/Form/CreatePanelForm.jsx'
import LoginForm from '../components/LogInForm/LogInForm.jsx'
import ShowProject from '../components/Project/showProject.jsx'

import AlumniVerification from '../pages/Alumni/AlumniVerification.jsx'
import verifyAchievement from '../pages/Achievements/verifyAchievement.jsx'
import createEvent from '../components/Events/createEvent.jsx'
import AddProject from '../components/Project/AddProject.jsx'
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm.jsx'
import AddTeamMember from '../pages/Team/AddTeamMember.jsx'

export const DefaultRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home
  },
  {
    path: 'team',
    title: 'Teams',
    component: Teams
  },
  {
    path: 'achievements',
    title: 'Achievements',
    component: Achievements
  },
  {
    path: 'achievements/add-new',
    title: 'Add New Achievement',
    component: AchievementsForm
  },
  {
    path: 'events',
    title: 'Events',
    component: Events
  },
  {
    path: 'forms',
    title: 'Forms',
    component: Forms
  },
  {
    path: 'about',
    title: 'About',
    component: About
  },
  {
    path: 'register/:formId',
    title: 'Register Form',
    component: RegisterForm
  },
  {
    path: 'connect',
    title: 'Connect',
    component: Connect
  },
  {
    path: 'connect/alumni',
    title: 'Alumni Menu',
    component: AlumniMenu
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginForm
  },
  {
    path: 'signup',
    title: 'Signup',
    component: SignUpForm
  },
  {
    path: 'profile',
    title: 'Profile',
    component: UserProfile
  },
  {

    path: 'projects',
    title: 'projects',
    component: ShowProject
  },
  {
    path: 'forgot-password',
    title: 'Reset Password',
    component: ForgotPasswordForm

  },
  {
    path: '*',
    title: 'Not Found',
    component: NotFound
  }
]

export const AdminRoutes = [
  {
    path: '',
    title: 'Dashboard',
    component: AdminPanel
  },

  {
    path: 'add-project',
    title: 'Add Project',
    component: AddProject
  },
  {
    path: 'forms/all',
    title: 'All Forms',
    component: AllForms
  },
  {
    path: 'forms/create',
    title: 'Create a Form',
    component: CreateForm
  },
  {
    path: 'responses',
    title: 'Responses',
    component: Tables
  },
  {
    path: 'verify-achievements',
    title: 'Verify Achievements',
    component: verifyAchievement
  },
  {
    path: 'verify-alumni',
    title: 'Verify Alumni',
    component: AlumniVerification
  },
  {
    path: 'create-panel',
    title: 'Create Panel',
    component: CreatePanelForm
  },
  {
    path:'create-event',
    title: 'Create Event',
    component: createEvent
  },
  {
    path:'add-team-member',
    title: 'Add Team Member',
    component: AddTeamMember
  },

  
]
