# Quick Start
    import {Pagination} from 'wec-front-pagination';

    const pagination = new Pagination(opts = {});
    paginatin.draw(count);
    pagination.onQueryChange(callback);

    access current state with pagination.current & pagination.pageSize