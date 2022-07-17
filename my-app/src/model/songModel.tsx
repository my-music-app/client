// export enum Genre {
//      CLASSICAL,
//      ROCK ,
//      POP ,
//      RAP  
// }
export type Genre =
          "CLASSICAL"
          |"ROCK"
          |"POP"
          |"RAP"
     
export type SongModel = {
     _id?: String,
     title: String,
     artist: String,
     genre: Genre,
     length: number,
     price: number
};