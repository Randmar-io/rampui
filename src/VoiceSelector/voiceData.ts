export const stylesMap: { [key: string]: string } = {
    "angry": "😡 Angry",
    "chat": "💬 Chat",
    "cheerful": "😊 Cheerful",
    "excited": "🤩 Excited",
    "friendly": "🤗 Friendly",
    "hopeful": "🙌 Hopeful",
    "sad": "😢 Sad",
    "shouting": "📢 Shouting",
    "terrified": "😱 Terrified",
    "unfriendly": "😒 Unfriendly",
    "whispering": "🤫 Whispering",
    "assistant": "💁‍♂️ Assistant",
    "customerservice": "📞 Customer Service",
    "newscast": "📺 Newscast",
    "empathetic": "❤️ Empathetic",
    "narration-professional": "🎙️ Narration - Professional",
    "newscast-casual": "👕 Newscast - Casual",
    "newscast-formal": "👔 Newscast - Formal"
};

export const stylesReverseMap: { [key: string]: string } = Object.fromEntries(Object.entries(stylesMap).map(([key, value]) => [value, key]));

export const personalities = [
    "Serious",
    "Clear",
    "Formal",
    "Authoritative",
    "Confident",
    "Authentic",
    "Warm",
    "Pleasant",
    "Caring",
    "Friendly",
    "Cheerful",
    "Light-Hearted",
    "Casual",
    "Sincere",
    "Pleasant​",
    "Approachable",
    "Whimsical",
    "Upbeat",
    "Engaging",
    "Soothing",
    "Calm",
    "Smooth",
    "Gentle",
    "Shy",
    "Polite",
    "Empathetic",
    "Professional",
    "Bright",
    "Thoughtful",
    "Honest",
    "Curious",
    "Mature",
    "Crisp",
    "Deep"
]

export const genders = ["Female", "Male"];

export const ageGroups = ["Adult", "YoungAdult", "Child"];

export const tailoredScenarios = [
    "Podcast",
    "Narration",
    "Assistant",
    "Chat",
    "Advertisement",
    "Documentary",
    "E-learning",
    "News",
    "Audiobook",
    "Gaming",
    "Meditation",
    "Customer Service"
];

export enum VoiceNames {
    Alloy = "en-US-AlloyTurboMultilingualNeural",
    Amber = "en-US-AmberNeural",
    Ana = "en-US-AnaNeural",
    Andrew = "en-US-AndrewNeural",
    Aria = "en-US-AriaNeural",
    Ashley = "en-US-AshleyNeural",
    Ava = "en-US-AvaNeural",
    Blue = "en-US-BlueNeural",
    Brandon = "en-US-BrandonNeural",
    Brian = "en-US-BrianNeural",
    Christopher = "en-US-ChristopherNeural",
    Cora = "en-US-CoraNeural",
    Davis = "en-US-DavisNeural",
    Elizabeth = "en-US-ElizabethNeural",
    Emma = "en-US-EmmaNeural",
    Eric = "en-US-EricNeural",
    Guy = "en-US-GuyNeural",
    Jacob = "en-US-JacobNeural",
    Jane = "en-US-JaneNeural",
    Jason = "en-US-JasonNeural",
    Jenny = "en-US-JennyNeural",
    Kai = "en-US-KaiNeural",
    Luna = "en-US-LunaNeural",
    Michelle = "en-US-MichelleNeural",
    Monica = "en-US-MonicaNeural",
    Nancy = "en-US-NancyNeural",
    Nova = "en-US-NovaTurboMultilingualNeural",
    Roger = "en-US-RogerNeural",
    Ryan = "en-US-RyanMultilingualNeural",
    Sara = "en-US-SaraNeural",
    Steffan = "en-US-SteffanNeural",
    Tony = "en-US-TonyNeural",
}

export const voiceDisplayName: { [key: string]: string } = {
    "en-US-AlloyTurboMultilingualNeural": "Alloy",
    "en-US-AmberNeural": "Amber",
    "en-US-AnaNeural": "Ana",
    "en-US-AndrewNeural": "Andrew",
    "en-US-AriaNeural": "Aria",
    "en-US-AshleyNeural": "Ashley",
    "en-US-AvaNeural": "Ava",
    "en-US-BlueNeural": "Blue",
    "en-US-BrandonNeural": "Brandon",
    "en-US-BrianNeural": "Brian",
    "en-US-ChristopherNeural": "Christopher",
    "en-US-CoraNeural": "Cora",
    "en-US-DavisNeural": "Davis",
    "en-US-ElizabethNeural": "Elizabeth",
    "en-US-EmmaNeural": "Emma",
    "en-US-EricNeural": "Eric",
    "en-US-GuyNeural": "Guy",
    "en-US-JacobNeural": "Jacob",
    "en-US-JaneNeural": "Jane",
    "en-US-JasonNeural": "Jason",
    "en-US-JennyNeural": "Jenny",
    "en-US-KaiNeural": "Kai",
    "en-US-LunaNeural": "Luna",
    "en-US-MichelleNeural": "Michelle",
    "en-US-MonicaNeural": "Monica",
    "en-US-NancyNeural": "Nancy",
    "en-US-NovaTurboMultilingualNeural": "Nova",
    "en-US-RogerNeural": "Roger",
    "en-US-RyanMultilingualNeural": "Ryan",
    "en-US-SaraNeural": "Sara",
    "en-US-SteffanNeural": "Steffan",
    "en-US-TonyNeural": "Tony",
}

export interface VoiceData {
    name: string;
    shortName: string;
    description?: string;
    locale: string;
    properties: {
        Gender?: string;
        VoiceStyleNames?: string;
        DisplayName?: string;
        ShortName?: string;
        AgeGroups?: string;
        Personality?: string;
        TailoredScenarios?: string;
        DisplayVoiceName?: string;
        ReleaseScope?: string;
    };
    voiceType: string;
    id: string;
    styles: {
        styleName: string;
        audioFileEndpointWithSas: string;
    }[];
}

export const voiceData: VoiceData[] = [
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AlloyTurboMultilingualNeural)",
        "shortName": "en-US-AlloyTurboMultilingualNeural",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "AlloyTurboMultilingual",
            "ShortName": "en-US-AlloyTurboMultilingualNeural",
            "DisplayVoiceName": "AlloyTurboMultilingualNeural",
            "ReleaseScope": "PublicPreview"
        },
        "voiceType": "StandardVoice",
        "id": "bd4b580c-0233-418e-a5c5-e51086b0b1a7",
        "styles": []
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AmberNeural)",
        "shortName": "en-US-AmberNeural",
        "description": "An engaging voice for children's stories that's warm and approachable, perfect for capturing the attention of young listeners.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Amber",
            "ShortName": "en-US-AmberNeural",
            "AgeGroups": "Adult",
            "Personality": "Whimsical,Upbeat,Light-Hearted",
            "TailoredScenarios": "Audiobook,Narration",
            "DisplayVoiceName": "AmberNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "814db6e1-ce6e-4b8a-9c10-347943910d18",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Amber-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AnaNeural)",
        "shortName": "en-US-AnaNeural",
        "description": "A child voice that's great at conveying curiosity and engaging users with a fun and playful tone that's sure to delight.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Ana",
            "ShortName": "en-US-AnaNeural",
            "AgeGroups": "Child",
            "Personality": "Curious,Cheerful,Engaging",
            "TailoredScenarios": "Audiobook,Narration",
            "DisplayVoiceName": "AnaNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "2c82b4c7-1b43-46f4-a021-9038c848dce9",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Ana-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AndrewNeural)",
        "shortName": "en-US-AndrewNeural",
        "description": "A warm, engaging voice that sounds like someone you want to know, perfect for building a connection with listeners.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Andrew",
            "ShortName": "en-US-AndrewNeural",
            "AgeGroups": "Adult",
            "Personality": "Confident,Authentic,Warm",
            "TailoredScenarios": "Chat,Advertisement",
            "DisplayVoiceName": "AndrewNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "e91daafe-bd0e-4b60-b2a6-15e21f7db71b",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Andrew-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AriaNeural)",
        "shortName": "en-US-AriaNeural",
        "description": "A clear-sounding voice with great versatility that can adapt to any use case and speak in a way that's easy to understand.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "chat,customerservice,narration-professional,newscast-casual,newscast-formal,cheerful,empathetic,angry,sad,excited,friendly,terrified,shouting,unfriendly,whispering,hopeful,Default",
            "DisplayName": "Aria",
            "ShortName": "en-US-AriaNeural",
            "AgeGroups": "Adult",
            "Personality": "Crisp,Bright,Clear",
            "TailoredScenarios": "News,E-learning",
            "DisplayVoiceName": "AriaNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "27e2f1c8-cfe0-4324-88e2-cd0bafeffe1b",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-General-audio.wav"
            },
            {
                "styleName": "chat",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Chat-audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Cheerful-audio.wav"
            },
            {
                "styleName": "customerservice",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Customerservice-audio.wav"
            },
            {
                "styleName": "empathetic",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Empathetic-audio.wav"
            },
            {
                "styleName": "narration-professional",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Narration-professional-audio.wav"
            },
            {
                "styleName": "newscast-casual",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Newscast-casual-audio.wav"
            },
            {
                "styleName": "newscast-formal",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Aria-Newscast-formal-audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Angry-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Aria-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AshleyNeural)",
        "shortName": "en-US-AshleyNeural",
        "description": "A young voice that sounds a little shy but honest and sincere, conveying a sense of authenticity and approachability.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Ashley",
            "ShortName": "en-US-AshleyNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Sincere,Approachable,Honest",
            "TailoredScenarios": "Gaming,Narration",
            "DisplayVoiceName": "AshleyNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "e46f4f45-4768-4b53-b385-85a8a36e1410",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Ashley-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, AvaNeural)",
        "shortName": "en-US-AvaNeural",
        "description": "A bright, engaging voice with a beautiful tone that's perfect for delivering search results and capturing users' attention.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Ava",
            "ShortName": "en-US-AvaNeural",
            "AgeGroups": "Adult",
            "Personality": "Pleasant,Caring,Friendly",
            "TailoredScenarios": "Chat,Documentary",
            "DisplayVoiceName": "AvaNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "58917225-b77f-4aec-8476-1a29b4ea2a75",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Ava-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, BlueNeural)",
        "shortName": "en-US-BlueNeural",
        "description": "An objective neutral-sounding voice, good for conveying content without bias.",
        "locale": "en-US",
        "properties": {
            "Gender": "Neutral",
            "VoiceStyleNames": "",
            "DisplayName": "Blue",
            "ShortName": "en-US-BlueNeural",
            "AgeGroups": "Adult",
            "Personality": "Formal,Serious,Confident",
            "TailoredScenarios": "Documentary,Narration",
            "DisplayVoiceName": "BlueNeural",
            "ReleaseScope": "PublicPreview"
        },
        "voiceType": "StandardVoice",
        "id": "420f9d0e-b69e-4a3d-88f7-43bcacbae7e8",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Blue-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, BrandonNeural)",
        "shortName": "en-US-BrandonNeural",
        "description": "An honest and soft-spoken voice that's warm and good for conversation, connecting with users on a personal level and building trust.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Brandon",
            "ShortName": "en-US-BrandonNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Warm,Engaging,Authentic",
            "TailoredScenarios": "Gaming,Narration",
            "DisplayVoiceName": "BrandonNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "2380ef4f-34bb-4d06-b6e2-3bbf42621a26",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Brandon-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, BrianNeural)",
        "shortName": "en-US-BrianNeural",
        "description": "A youthful, cheerful, and versatile voice that can handle any task you throw its way, well-suited to a wide variety of contexts.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Brian",
            "ShortName": "en-US-BrianNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Sincere,Calm,Approachable",
            "TailoredScenarios": "Podcast,Chat",
            "DisplayVoiceName": "BrianNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "c15219d0-f768-41d1-99cd-b1ce8e31c565",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Brian-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, ChristopherNeural)",
        "shortName": "en-US-ChristopherNeural",
        "description": "A warm voice for imparting information, especially for conversation,  great for conveying information in a fun and approachable way.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Christopher",
            "ShortName": "en-US-ChristopherNeural",
            "AgeGroups": "Adult",
            "Personality": "Deep,Warm",
            "TailoredScenarios": "Meditation,Gaming",
            "DisplayVoiceName": "ChristopherNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "4337134d-4e59-48d1-af56-f4e96771bda1",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Christopher-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, CoraNeural)",
        "shortName": "en-US-CoraNeural",
        "description": "A softer voice with a touch of melancholy that conveys understanding and empathy, delivering content in a sensitive and compassionate way.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Cora",
            "ShortName": "en-US-CoraNeural",
            "AgeGroups": "Adult",
            "Personality": "Empathetic,Formal,Sincere",
            "TailoredScenarios": "Meditation,Audiobook",
            "DisplayVoiceName": "CoraNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "4bfabb53-98ee-4c2d-9a60-51835494916d",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Cora-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, DavisNeural)",
        "shortName": "en-US-DavisNeural",
        "description": "A generally calm and relaxed voice that can switch between tones seamlessly and be highly expressive when needed.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "chat,angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Davis",
            "ShortName": "en-US-DavisNeural",
            "AgeGroups": "Adult",
            "Personality": "Soothing,Calm,Smooth",
            "TailoredScenarios": "Audiobook,meditation",
            "DisplayVoiceName": "DavisNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "b5f86142-ce84-4483-8142-45db0d778add",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-General-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Angry-Audio.wav"
            },
            {
                "styleName": "chat",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Chat-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Davis-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, ElizabethNeural)",
        "shortName": "en-US-ElizabethNeural",
        "description": "A professorial voice that's clear and authoritative, great for delivering educational content in a way that's easy to understand.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Elizabeth",
            "ShortName": "en-US-ElizabethNeural",
            "AgeGroups": "Adult",
            "Personality": "Authoritative,Formal,Serious",
            "TailoredScenarios": "Assistant,Narration",
            "DisplayVoiceName": "ElizabethNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "f1b81aff-514c-4ea8-b602-0c56180c7c63",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Elizabeth-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, EmmaNeural)",
        "shortName": "en-US-EmmaNeural",
        "description": "A friendly, sincere voice with a light-hearted and pleasant tone that's ideal for education and explanations.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Emma",
            "ShortName": "en-US-EmmaNeural",
            "AgeGroups": "Adult",
            "Personality": "Cheerful,Light-Hearted,Casual",
            "TailoredScenarios": "E-learning,Chat",
            "DisplayVoiceName": "EmmaNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "087e625d-ea24-4084-bea7-1cd8615d8900",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Emma-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, EricNeural)",
        "shortName": "en-US-EricNeural",
        "description": "A friendly voice that conveys soft-spoken confidence, inspiring trust and reliability with a calm and collected tone.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Eric",
            "ShortName": "en-US-EricNeural",
            "AgeGroups": "Adult",
            "Personality": "Confident,Sincere,Warm",
            "TailoredScenarios": "Assistant,Narration",
            "DisplayVoiceName": "EricNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "22bb63f1-7dba-49b9-9d4d-b56c7ce92d47",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Eric-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, GuyNeural)",
        "shortName": "en-US-GuyNeural",
        "description": "A friendly voice with slightly whimsical undertones and a wide expressive range that can convey any emotion with ease.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "newscast,angry,cheerful,sad,excited,friendly,terrified,shouting,unfriendly,whispering,hopeful,Default",
            "DisplayName": "Guy",
            "ShortName": "en-US-GuyNeural",
            "AgeGroups": "Adult",
            "Personality": "Light-Hearted,Whimsical,Friendly",
            "TailoredScenarios": "News,Gaming",
            "DisplayVoiceName": "GuyNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "e0638b39-fbd2-4497-a482-e2f65759412a",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Guy-General-audio.wav"
            },
            {
                "styleName": "newscast",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Guy-Newscast-audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Guy-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, JacobNeural)",
        "shortName": "en-US-JacobNeural",
        "description": "A mature voice that conveys a strong sense of believability, delivering content in a way that's straightforward and to the point.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Jacob",
            "ShortName": "en-US-JacobNeural",
            "AgeGroups": "Adult",
            "Personality": "Sincere,Formal,Confident",
            "TailoredScenarios": "Assistant,Narration",
            "DisplayVoiceName": "JacobNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "c8e1b1c1-e5c4-4f04-93ab-d55b83949751",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jacob-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, JaneNeural)",
        "shortName": "en-US-JaneNeural",
        "description": "An early-20s female voice like the girl next door that's warm and friendly, great for building a connection with users.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Jane",
            "ShortName": "en-US-JaneNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Serious,Approachable,Upbeat",
            "TailoredScenarios": "Audiobook,Meditation",
            "DisplayVoiceName": "JaneNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "1fcefcc6-c578-4aec-99fa-bcd38dfa0a02",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-General-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jane-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, JasonNeural)",
        "shortName": "en-US-JasonNeural",
        "description": "An early-20s male voice that's polite and unassuming, perhaps a little shy, with a respectful and professional tone that leaves a good impression.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Jason",
            "ShortName": "en-US-JasonNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Gentle,Shy,Polite",
            "TailoredScenarios": "Audiobook,Gaming",
            "DisplayVoiceName": "JasonNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "93cdc1ca-0ba2-4615-91ec-495bd6b40b3d",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-General-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jason-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, JennyNeural)",
        "shortName": "en-US-JennyNeural",
        "description": "A youthful voice with a wide range of expressions, perfect for customer service and keeping users satisfied.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "assistant,chat,customerservice,newscast,angry,cheerful,sad,excited,friendly,terrified,shouting,unfriendly,whispering,hopeful,Default",
            "DisplayName": "Jenny",
            "ShortName": "en-US-JennyNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Sincere,Pleasant,Approachable",
            "TailoredScenarios": "News,Assistant",
            "DisplayVoiceName": "JennyNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "e5e4f59b-65c6-42b2-a6e3-5985d1a1ea07",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jenny-General-audio.wav"
            },
            {
                "styleName": "assistant",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jenny-Assistant-audio.wav"
            },
            {
                "styleName": "chat",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jenny-Chat-audio.wav"
            },
            {
                "styleName": "customerservice",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jenny-Customerservice-audio.wav"
            },
            {
                "styleName": "newscast",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Jenny-Newscast-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Jenny-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, KaiNeural)",
        "shortName": "en-US-KaiNeural",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "conversation,Default",
            "DisplayName": "Kai",
            "ShortName": "en-US-KaiNeural",
            "AgeGroups": "Adult",
            "Personality": "Sincere,Pleasant,Bright,Clear,Friendly,Warm",
            "TailoredScenarios": "Assistant,Chat",
            "DisplayVoiceName": "KaiNeural",
            "ReleaseScope": "PublicPreview"
        },
        "voiceType": "StandardVoice",
        "id": "8b4a4ff4-4c14-43cf-a2d8-b721c59c21f7",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Kai-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, LunaNeural)",
        "shortName": "en-US-LunaNeural",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "conversation,Default",
            "DisplayName": "Luna",
            "ShortName": "en-US-LunaNeural",
            "AgeGroups": "Adult",
            "Personality": "Sincere,Pleasant,Bright,Clear,Friendly,Warm",
            "TailoredScenarios": "Assistant,Chat",
            "DisplayVoiceName": "LunaNeural",
            "ReleaseScope": "PublicPreview"
        },
        "voiceType": "StandardVoice",
        "id": "0881d85f-d5fc-4fdf-a710-5e76f22bf12d",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Luna-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, MichelleNeural)",
        "shortName": "en-US-MichelleNeural",
        "description": "An honest voice that conveys confidence and understanding.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Michelle",
            "ShortName": "en-US-MichelleNeural",
            "AgeGroups": "Adult",
            "Personality": "Confident,Authentic,Warm",
            "TailoredScenarios": "Podcast,Narration",
            "DisplayVoiceName": "MichelleNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "d2e289ac-2b92-4127-9183-5475de808892",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Michelle-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, MonicaNeural)",
        "shortName": "en-US-MonicaNeural",
        "description": "A mature voice that conveys a strong sense of believability, perfect for delivering content in the best possible way",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "Monica",
            "ShortName": "en-US-MonicaNeural",
            "AgeGroups": "Adult",
            "Personality": "Mature,Authentic,Warm",
            "TailoredScenarios": "Podcast,Narration",
            "DisplayVoiceName": "MonicaNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "af5c31bf-a36d-4852-8555-b775316d9e5f",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Monica-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, NancyNeural)",
        "shortName": "en-US-NancyNeural",
        "description": "A confident-sounding voice that's perfect for delivering important information with a professional and authoritative tone that inspires trust.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Nancy",
            "ShortName": "en-US-NancyNeural",
            "AgeGroups": "Adult",
            "Personality": "Confident,Serious,Mature",
            "TailoredScenarios": "Narration,Gaming",
            "DisplayVoiceName": "NancyNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "52c945ea-c060-4085-aef7-d9c6951f0a86",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-General-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Nancy-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, NovaTurboMultilingualNeural)",
        "shortName": "en-US-NovaTurboMultilingualNeural",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "",
            "DisplayName": "NovaTurboMultilingual",
            "ShortName": "en-US-NovaTurboMultilingualNeural",
            "DisplayVoiceName": "NovaTurboMultilingualNeural",
            "ReleaseScope": "PublicPreview"
        },
        "voiceType": "StandardVoice",
        "id": "f60336c0-5a0b-4a55-bf42-1f63dd81106c",
        "styles": []
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, RogerNeural)",
        "shortName": "en-US-RogerNeural",
        "description": "A friendly voice that conveys information in a approachable manner",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Roger",
            "ShortName": "en-US-RogerNeural",
            "AgeGroups": "Adult",
            "Personality": "Serious,Formal,Confident",
            "TailoredScenarios": "Assistant,Narration",
            "DisplayVoiceName": "RogerNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "ec861c24-5c0a-4b26-b2a2-a72d0ee2cbe7",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Roger-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, RyanMultilingualNeural)",
        "shortName": "en-US-RyanMultilingualNeural",
        "description": "A straightforward voice that  works well for delivering information quickly and concisely",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Ryan Multilingual",
            "ShortName": "en-US-RyanMultilingualNeural",
            "AgeGroups": "Adult",
            "Personality": "Professional,Authentic,Sincere",
            "TailoredScenarios": "Assistant,Gaming",
            "DisplayVoiceName": "RyanMultilingualNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "6b0704b2-cdf3-49cf-b417-5c5232566b29",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-RyanMultilingual-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, SaraNeural)",
        "shortName": "en-US-SaraNeural",
        "description": "A female teenager voice with a wide range of expressive capabilities that can convey any emotion with ease and keep users engaged.",
        "locale": "en-US",
        "properties": {
            "Gender": "Female",
            "VoiceStyleNames": "angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Sara",
            "ShortName": "en-US-SaraNeural",
            "AgeGroups": "YoungAdult",
            "Personality": "Sincere,Calm,Confident",
            "DisplayVoiceName": "SaraNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "38db11b6-fa64-4989-8d75-4a48695ee5cd",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Sara-General-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Sara-Cheerful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Sara-Sad-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Sara-Angry-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Hopeful-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Sara-Whispering-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, SteffanNeural)",
        "shortName": "en-US-SteffanNeural",
        "description": "A great voice for imparting information, especially in a learning environment.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "",
            "DisplayName": "Steffan",
            "ShortName": "en-US-SteffanNeural",
            "AgeGroups": "Adult",
            "Personality": "Mature,Authentic,Warm",
            "TailoredScenarios": "Assistant,Narration",
            "DisplayVoiceName": "SteffanNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "09b38d23-ad18-4617-969a-9343d9021cb2",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/en-US-Steffan-General-Audio.wav"
            }
        ]
    },
    {
        "name": "Microsoft Server Speech Text to Speech Voice (en-US, TonyNeural)",
        "shortName": "en-US-TonyNeural",
        "description": "A versatile voice that can sound both casual and professional, adaptable to any use case and situation.",
        "locale": "en-US",
        "properties": {
            "Gender": "Male",
            "VoiceStyleNames": "angry,cheerful,excited,friendly,hopeful,sad,shouting,terrified,unfriendly,whispering,Default",
            "DisplayName": "Tony",
            "ShortName": "en-US-TonyNeural",
            "AgeGroups": "Adult",
            "Personality": "Thoughtful,Authentic,Sincere",
            "TailoredScenarios": "Gaming,Narration",
            "DisplayVoiceName": "TonyNeural",
            "ReleaseScope": "PublicGA"
        },
        "voiceType": "StandardVoice",
        "id": "96d631b1-d438-48ba-aa46-6293707d2071",
        "styles": [
            {
                "styleName": "general",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-General-Audio.wav"
            },
            {
                "styleName": "angry",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Angry-Audio.wav"
            },
            {
                "styleName": "cheerful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Cheerful-Audio.wav"
            },
            {
                "styleName": "excited",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Excited-Audio.wav"
            },
            {
                "styleName": "friendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Friendly-Audio.wav"
            },
            {
                "styleName": "hopeful",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Hopeful-Audio.wav"
            },
            {
                "styleName": "sad",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Sad-Audio.wav"
            },
            {
                "styleName": "shouting",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Shouting-Audio.wav"
            },
            {
                "styleName": "terrified",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Terrified-Audio.wav"
            },
            {
                "styleName": "unfriendly",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Unfriendly-Audio.wav"
            },
            {
                "styleName": "whispering",
                "audioFileEndpointWithSas": "https://speechstudioprodpublicsa.blob.core.windows.net/ttsvoice/Masterpieces/En-US-Tony-Whispering-Audio.wav"
            }
        ]
    }
]