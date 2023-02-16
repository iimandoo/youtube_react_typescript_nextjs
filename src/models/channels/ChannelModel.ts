export type ChannelModel = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics: {
    viewCount: number;
    subscriberCount: number;
  };
};

export type ChannelsResponseModel = {
  items: [ChannelModel];
};
