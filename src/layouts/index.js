import contact from './contact';
import home from './home';
import page from './page';
import post from './post';

export { contact, home, page, post };

export default {
    contact,
    home,
    page,
    post
};
render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const headerImage = _.get(header, 'background_img');
        const page = _.get(this.props, 'page');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <div className="post-feed">
                            {_.map(posts, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))}
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
