import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';
import { userService } from './src/userService.js';
import { userHelper } from './src/userHelper.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showRegister } from './src/views/register.js';
import { showDashboard } from './src/views/dashboard.js';
import { showDetails } from './src/views/details.js';
import { showAdd } from './src/views/add.js';
import { showEdit } from './src/views/edit.js';

const root = document.querySelector('main')
const guest = document.querySelector('.guest')
const user = document.querySelector('.user')

page(decorationContext);
page('/logout', logout);
page('/', showHome);
page('/login', showLogin)
page('/register', showRegister)
page('/dashboard', showDashboard)
page('/details/:id', showDetails)
page('/add', showAdd)
page('/edit/:id', showEdit)

page.start();
updateNav();

async function logout(){
    await userService.logout();
    updateNav();
    goTo('/')
}

function renderer(template){
    render(template, root);
}

function updateNav(){
    const userData = userHelper.getUserData();
    if(userData){
        user.style.display = 'block';
        guest.style.display = 'none'
    } else {
        user.style.display = 'none';
        guest.style.display = 'block';
    }
}

function goTo(path){
    page.redirect(path);
}

function decorationContext(ctx, next){
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    next();
}