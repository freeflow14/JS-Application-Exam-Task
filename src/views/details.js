import { html } from '../../node_modules/lit-html/lit-html.js'
import { dataService } from '../dataService.js';
import { userHelper } from '../userHelper.js';
import { userService } from '../userService.js';

const detailsTemplate = (item, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">0</span></h3>
            ${isOwner ?
    html` <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click = ${delCharacter} href="/dashboard" id="delete-btn">Delete</a>

             <!--Bonus - Only for logged-in users ( not authors )-->
            <!-- <a href="" id="like-btn">Like</a> -->

          </div>` : ''
  }
               <!--Edit and Delete are only for creator-->
         
            </div>
        </div>
      </section>
`
let context = null;
export async function showDetails(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const data = await dataService.getSingleCharacter(id);
  const isOwner = userHelper.getUserId() === data._ownerId;
  ctx.render(detailsTemplate(data, isOwner))
}

async function delCharacter(e) {
  e.preventDefault();
  const id = context.params.id;

  const confirmed = window.confirm('Are you sure you want to delete this character?');

  if (confirmed) {
    await dataService.delCharacter(id);
    context.goTo('/dashboard');
  }
}