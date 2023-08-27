import { nanoid } from 'nanoid';
import * as linkDal from '../db/dal/links.js'
import { LinkOuput } from '../db/models/Link.model.js';

export class LinksService {
  shortify = (oldLink: string): Promise<LinkOuput> => {
    const newLink = nanoid(6);
    return linkDal.create({ old_link: oldLink, new_link: newLink })
  }
  getOldLink = (newLink: string): Promise<LinkOuput> => {
    return linkDal.getByNewLink(newLink)
  }

}