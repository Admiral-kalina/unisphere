const path = require("path")

exports.onCreatePage = async({page, actions}) => {
    const {createPage} = actions;

    if(page.path.match(/^\/event/)) {
        createPage({
            path: "/event",
            matchPath: "/event/:id",
            component: path.resolve("src/pages/event/index.jsx")

        })
    }
}