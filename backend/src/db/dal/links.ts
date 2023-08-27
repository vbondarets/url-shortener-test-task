import Link, { LinkInput, LinkOuput } from '../models/Link.model.js'
import { createClient } from 'redis'

const client = createClient({
    url: `redis://default:securepass@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
})
client.on('error', err => console.log('Redis CLient error', err));
await client.connect();



export const create = async (payload: LinkInput): Promise<LinkOuput> => {
    const link = await Link.create(payload);
    await client.set(payload.new_link, JSON.stringify(payload));
    return link
}
export const getByNewLink = async (new_link: string): Promise<LinkOuput> => {
    const redisLink = await client.get(new_link);
    if (!redisLink) {
        const link = await Link.findOne({
            where: {
                new_link
            }
        })
        if (!link) {
            throw new Error('not found');
        }
        await client.set(new_link, JSON.stringify(link));
        return link
    }
    else {
        console.log('redis');
        return JSON.parse(redisLink);
    }

}