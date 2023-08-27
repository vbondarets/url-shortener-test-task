import Link, {LinkInput, LinkOuput} from '../models/Link.model.js'

export const create = async (payload: LinkInput): Promise<LinkOuput> => {
    const link = await Link.create(payload)
    return link
}
export const getByNewLink = async (new_link: string): Promise<LinkOuput> => {
    const link = await Link.findOne({where: {
        new_link
    }})
    if (!link) {
        throw new Error('not found')
    }
    return link
}