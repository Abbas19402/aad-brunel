import BrunelLogo from "../Assets/logo.png"
import FeatureHeroImage from "../Assets/hero_image.png"
import HeroSparkle from "../Assets/hero_sparkle.png"
import SuccessStyledText from "../Assets/text_success.png"
import RegisterStyledText from "../Assets/text-registration.png"
import MindStyledText from "../Assets/text_mind.png"
import RocketVector from "../Assets/rocket_vector.png"
import SuccessVector from "../Assets/success_vector.png"
import FaqUnion from "../Assets/faq_union.png"

const ImagesPath = {
    brunelLogo: {
        alt: "Brunel",
        source: BrunelLogo
    },
    featuredHeroImage: {
        alt: "Hero",
        source: FeatureHeroImage
    },
    vectors: {
        success: {
            alt: "Success",
            source: SuccessVector
        },
        rocket: {
            alt: "Rocket",
            source: RocketVector
        },
        sparkle: {
            alt: "Hero sparkle",
            source: HeroSparkle
        },
        faqUnion: {
            alt: "FAQ",
            source: FaqUnion
        }
    },
    styledText: {
        success: {
            alt: "",
            source: SuccessStyledText
        },
        registration: {
            alt: "",
            source: RegisterStyledText 
        },
        mind: {
            alt: "",
            source: MindStyledText
        }
    }
}

export default ImagesPath