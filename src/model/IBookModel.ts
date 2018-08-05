export interface IBookModel {
    dir: string;
    lbl: string;
    toc: IChapterModel[];
}

export interface IChapterModel {
    fnm: string;
    lbl: string;
}
