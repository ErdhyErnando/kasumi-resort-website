import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/constants';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/id/blog/${post.id}/`,
		})),
	});
}
