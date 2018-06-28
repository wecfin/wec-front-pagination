# Quick Start
    ``` javascript
        import {Pagination} from 'wec-front-pagination';

        const pagination = new Pagination(opts = {});
        paginatin.draw(count);
        pagination.onQueryChange(callback);
    ```

    access current state with ```paginatin.current``` & ```pagination.pageSize```