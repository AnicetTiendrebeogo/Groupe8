import { chapters } from './chapter.model';

export class course{
  constructor(public id?: String,
    public title?: String,
    public description?: String,
    public imageUrl?: String,
    public chapters?: chapters[]){}
}
