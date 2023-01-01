import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { readFileSync, readdirSync } from 'fs';

const pattern = /\.md$/;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const filenames = readdirSync('./src/routes').filter((file) => pattern.test(file)).map((file) => readFileSync(`./src/routes/${file}`, 'utf-8')).map((file) => marked.parse(file));
  // console.log(filenames)
  const post = {
    content: filenames
  };

  return post

  throw error(404, 'Not found');
}