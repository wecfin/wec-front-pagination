import {Pagination} from '../index.js';

test('Pagination', () => {
    const opts = {
        sizes: [10, 20, 30, 50, 100],
        layout: 'sizes, prev, next, jumper'
    };
    const pagination = new Pagination(opts);

    pagination.appendTo(document.body);
    pagination.draw(33);

    expect(document.body.innerHTML).toBe(
        '<div class="pagination">'
        + '<select name="pageSize"><option value="10">10/page</option><option value="20">20/page</option><option value="30">30/page</option><option value="50">50/page</option><option value="100">100/page</option></select>'
        + ' <button class="btn-prev">&lt;</button> '
        + '<ul class="pager flex"><li data-page="1" class="active">1</li><li data-page="2">2</li><li data-page="3">3</li><li data-page="4">4</li></ul>'
        + ' <button class="btn-next">&gt;</button> '
        + '<div class="jumper-wrapper">'
        + ' <div class="flex flex-center align-center"> <input class="go-input" type="number" min="1" autocomplete="off" placeholder="1/4"> <button class="go-to">go</button> </div> </div></div>'
    )
})