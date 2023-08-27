import { NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError.js';
import { nanoid } from 'nanoid';
import Link  from '../db/models/Link.model.js';
import * as linkDal from '../db/dal/links.js'
import { LinkOuput } from '../db/models/Link.model.js';



export class LinksService {
  shortify = (oldLink: string, next: NextFunction): Promise<LinkOuput> => {
    const newLink = nanoid(6);
    return linkDal.create({ old_link: oldLink, new_link: newLink })
  }
  getOldLink = (newLink: string, next: NextFunction): Promise<LinkOuput> => {
    return linkDal.getByNewLink(newLink)
  }

}