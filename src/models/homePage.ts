export interface Seo {
    id: number;
    og_tags: string;
}

export interface VideoAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
}

export interface Video {
    id: number;
    attributes: VideoAttributes;
}

export interface OurMission {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        data: Media;
    };
    video: {
        data: Video;
    };
}

export interface ContentUnderProjects {
    id: number;
    title: string;
    description: string;
}

export interface MediaAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
}

export interface Media {
    id: number;
    attributes: MediaAttributes;
}

export interface DigitalAiCx {
    id: number;
    title: string;
    description: string;
    url: string;
    media: {
        data: Media;
    };
}

export interface HomePageData {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        seo: Seo;
        our_mission: OurMission;
        Content_Under_Projects: ContentUnderProjects;
        digital_ai_cx: DigitalAiCx[];
    };
}

export interface HomePageResponse {
    data: HomePageData;
    meta: Record<string, unknown>;
}
