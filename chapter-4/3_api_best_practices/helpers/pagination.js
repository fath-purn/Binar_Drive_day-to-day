module.exports = (req, count, page, limit) => {
    let result = {};
    let link = {};
    let path = `${req.protocol}://${req.get('host')}` + req.baseUrl + req.path;

    // jika hasil lebih kecil dari 0, maka tidak ada next page
    if (count - limit * page <= 0) {
        link.next = '';

        if (page - 1 <= 0) {
            link.prev = '';
        } else {
            link.prev = `${path}?page=${page - 1}&limit=${limit}`;
        }
    
    // jika hasil lebih besar dari 0, maka ada next page
    } else {
        link.next = `${path}?page=${page + 1}&limit=${limit}`;
        if (page - 1 <= 0) {
            link.prev = '';
        } else {
            link.prev = `${path}?page=${page - 1}&limit=${limit}`;
        }
    }

    result.links = link;
    result.total_items = count;

    return result;
};