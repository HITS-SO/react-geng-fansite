import kiin from "@/assets/images/players/kiin.png";
import kiin2 from "@/assets/images/players/kiin2.jpg";
import canyon from "@/assets/images/players/canyon.png";
import canyon2 from "@/assets/images/players/canyon2.jpg";
import chovy from "@/assets/images/players/chovy.png";
import chovy2 from "@/assets/images/players/chovy3.jpg";
import ruler from "@/assets/images/players/ruler.png";
import ruler2 from "@/assets/images/players/ruler2.jpg";
import duro from "@/assets/images/players/duro.png";
import duro2 from "@/assets/images/players/duro3.jpg";

export interface Player {
    id: number;
    slug: string;
    nickname: string;
    name: string;
    role: "TOP" | "JGL" | "MID" | "ADC" | "SUP";
    image: string;
    image2: string;
    description: string;
    team: string;
    nationality: string;
}

export const players: Player[] = [
    {
        id: 1,
        slug: "kiin",
        nickname: "Kiin",
        name: "김기인",
        role: "TOP",
        image: kiin,
        image2: kiin2,
        description:
            "기인은 LCK를 대표하는 최고의 탑 라이너 중 한 명으로, 흔들림 없는 꾸준함과 압도적인 기본기를 바탕으로 언제나 팀의 중심을 지켜왔습니다. 아프리카 프릭스 시절부터 묵묵히 자신의 가치를 증명하며 정상급 선수로 성장했고, Gen.G에 합류한 이후에는 리그를 대표하는 완성형 탑 라이너로 자리매김했습니다.",
        team: "GenG",
        nationality: "LCK",
    },
    {
        id: 2,
        slug: "canyon",
        nickname: "Canyon",
        name: "김건부",
        role: "JGL",
        image: canyon,
        image2: canyon2,
        description:
            "캐니언은 LCK를 대표하는 최고의 정글러로, 폭넓은 챔피언 폭과 월드 챔피언십 MVP에 걸맞은 압도적인 캐리력으로 수많은 경기를 승리로 이끌었습니다. 담원 시절 이미 완성형 정글러로 평가받았으며 Gen.G에 합류한 이후에는 더욱 다양한 역할을 수행하는 만능형 정글로 자리매김했습니다.",
        team: "GenG",
        nationality: "LCK",
    },
    {
        id: 3,
        slug: "chovy",
        nickname: "Chovy",
        name: "정지훈",
        role: "MID",
        image: chovy,
        image2: chovy2,
        description: `설명이 필요없는 역대 최고의 미드라이너로서 그를 평가할 수 있는 말은 단 한 마디 밖에 없습니다.  바로 "Chovy" 라는 단어입니다. `,
        team: "GenG",
        nationality: "LCK",
    },
    {
        id: 4,
        slug: "ruler",
        nickname: "Ruler",
        name: "박재혁",
        role: "ADC",
        image: ruler,
        image2: ruler2,
        description:
            "룰러는 LCK를 대표하는 최고의 원거리 딜러이자, 리그 오브 레전드 역사상 가장 위대한 원딜(Greatest AD Carry of All Time)로 평가받는 선수입니다. 압도적인 라인전 능력부터 한타를 끝내는 후반 캐리력까지 모든 순간 팀의 승리를 책임지며, 10년이라는 긴 시간 동안 변함없는 경기력으로 최정상 자리를 지켜왔습니다.",
        team: "GenG",
        nationality: "LCK",
    },
    {
        id: 5,
        slug: "duro",
        nickname: "Duro",
        name: "주민규",
        role: "SUP",
        image: duro,
        image2: duro2,
        description:
            "듀로는 신인답지 않은 과감한 패기와 뛰어난 피지컬을 바탕으로 경기의 흐름을 주도하는 서포터입니다. 다양한 챔피언 폭과 날카로운 센스, 그리고 베테랑 못지않은 세밀한 디테일을 겸비하며 이미 완성형에 가까운 모습을 보여주고 있습니다. Gen.G의 새로운 시대를 이끌어 갈 핵심 서포터로서 평가받고 있습니다.",
        team: "GenG",
        nationality: "LCK",
    },
];
