import { Request, Response, NextFunction } from 'express';
import {LinksService} from '../services/links.service.js';

export class LinksController {
  constructor(private LinksService: LinksService) {}

  async redirect(req: Request, res: Response, next : NextFunction) {
    const {link}: {link?: string} = req.params;
    const result = await this.LinksService.getOldLink(link as string, next);
    return res.redirect(result.old_link);
   
  }
  async shortifyLink(req: Request, res: Response, next : NextFunction) {
    const {link}: {link?: string} = req.body;
    const result = await this.LinksService.shortify(link as string, next);
    return res.json({newLink: `http://${process.env.HOST}:${process.env.PORT}/${result.new_link}`});
  }
}

const linksController = new LinksController(new LinksService());

export default linksController;