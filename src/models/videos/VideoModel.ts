export type VideosSearchParams = { searchWord?: string };

export type VideoModel = {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    channelTitle: string;
  };
};

export type VideoSearchResponseModel = {
  items: [VideoModel];
};

export type RelateVideosResponseModel = {
  items: [VideoModel];
};
