const SlideData: {
  temporaryData: Uint8Array[];
  jsonData: {
    Slideshows: {
      Meta: {
        Query: string;
        ResultOffset: string;
        NumResults: number;
        TotalResults: number;
      };
      Slideshow: {
        ID: number;
        Title: string;
        Description: string;
        Status: number;
        Username: string;
        URL: string;
        ThumbnailURL: string;
        ThumbnailSize: string;
        ThumbnailSmallURL: string;
        ThumbnailXLargeURL: string;
        ThumbnailXXLargeURL: string;
        Embed: string;
        Created: string;
        Updated: string;
        Language: string;
        Format: string;
        Download: number;
        DownloadUrl: string;
        SecretKey: string;
        SlideshowEmbedUrl: string;
        SlideshowType: number;
        InContest: number;
      }[];
    };
  };
} = {
  temporaryData: [],
  jsonData: {
    Slideshows: {
      Meta: {
        Query: "",
        ResultOffset: "",
        NumResults: 0,
        TotalResults: 0
      },
      Slideshow: []
    }
  }
};

export default SlideData;
