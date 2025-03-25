export const products = {
  ko: {
    hero: {
      title: "간호사를 직접 찾지 않더라도,\n소통할 수 있게",
      description:
        "케어마인더는 침상에 부착된 태블릿을 통해 환자의 질문 및 요청사항을 간호사에게 전달할 수 있습니다. 더이상 지나가는 간호사를 붙잡거나 직접 찾아가 질문을 하거나 필요한 사항을 요청할 필요가 없습니다.",
    },
    smartBed: {
      title: "케어보이스 스마트베드",
      description1:
        "환자는 홈화면에서 간호사의 설정에 따라 자신의 진료 상황을 볼 수도, 병원의 소개 내용을 볼 수도 있습니다.",
      description2:
        "메인 화면에 표시된 '현재 누적된 요청사항'이나 병원의 '공지' 등을 통해 현재 병원의 혼잡도를 확인할 수 있습니다.",
    },
    voiceRecognition: {
      title: "음성으로 요청하기",
      description: "케어마인더는 기본적으로 음성인식 기능을 사용합니다.",
      usability: {
        title: "편리한 사용성",
        description1: "디지털 관련 기기 사용이 어색한 노년층이나 타이핑이 불편한 환자에게도 용이성을 높였습니다.",
        description2: "입력된 내용은 일차적으로 정제 작업을 통해 올바른 음성에 따른 요청인지를 확인합니다.",
      },
      ai: {
        title: "AI 자동 분류",
        description1: "요청 내용은 AI 학습을 통해 자동으로 간호사 또는 간호조무사 등 관련 인력에게 전달이 됩니다.",
        description2:
          "병원별로 각기 다른 학습 데이터셋을 누적해 나가기 때문에 AI는 각 병원의 시스템에 맞는 분류체계를 점점 갖추어 나가게 됩니다.",
      },
    },
    messaging: {
      title: "간호사와 메시지하기",
      description1:
        "간호사는 환자에게 메시지를 보낼 수 있습니다. 요구사항에 대한 추가 정보를 얻을 수도 있고, 정보 제공 관련 일일 경우 환자에게 직접 가지 않더라도 메시지 소통을 통해 해결할 수 있습니다.",
      description2: "간호사가 보낸 메시지는 환자 화면에 자동으로 팝업 및 알림이 오게 되어 원활한 소통을 만들어냅니다.",
      description3:
        "환자는 자신이 질문 및 요청했던 내역들에 대한 구체적인 내용을 확인할 수 있습니다. 각 내역들의 현재 단계(대기, 진행 중, 완료), 시간, 간호사와의 메시지 내용 등을 확인할 수 있습니다.",
    },
    groupware: {
      title: "본래의 업무에 집중할 수 있는 환경을 만드는\n케어보이스 그룹웨어",
      description:
        "환자와 간호 인력 간의 소통 및 업무 분배 시스템을 체계화하는 케어마인더는 환자의 요청 및 질문을 자동으로 적절한 인력에 분배하고, 환자와 편리한 비대면 양방향 소통을 지원합니다.",
      feature1: {
        title: "자동으로 업무에 따라 분류되는\n효율적인 환자 요청 분류",
      },
      feature2: {
        title: "직접 가지 않아도 환자와\n소통할 수 있는 간편 메시지",
      },
    },
    features: {
      title: '"케어보이스 그룹웨어"는 다음 기능을 지원합니다',
      description:
        "현재 지원하고 있는 연동·제공 기능부터 앞으로 지원 예정 기능까지\n기능별 내용을 간략히 안내드립니다.",
      items: [
        {
          title: "환자 노트",
          description: "환자에 대한 기억 및 참고해야 할 부가 정보를 기록 및 공유합니다.",
        },
        {
          title: "환자 상태바 조절",
          description:
            "환자가 본인의 남은 진료 및 현재 진행 상황을 확인할 수 있는 상태바를 환자 페이지에 노출시킬지 여부를 결정할 수 있습니다.",
        },
        {
          title: "병원 공지 작성",
          description: "환자 페이지에 자동 반복재생될 병원 공지내용을 작성할 수 있습니다.",
        },
        {
          title: "NFC 태깅",
          description: "희망할 경우, 아이디/비밀번호 또는 NFC 태깅을 통해 더욱 보안을 강화할 수 있습니다.",
        },
        {
          title: "통계",
          description: "각 환자 및 간호 인력별 정보 및 업무에 대한 통계를 구할 수 있습니다.",
        },
      ],
    },
    cta: {
      title: "케어마인더와 함께 더 효율적인 병원 환경을 만들어보세요",
      description: "간호 인력의 업무 효율성을 높이고 환자 경험을 개선하는 스마트 솔루션",
      button: "도입 문의하기",
    },
  },
  en: {
    hero: {
      title: "Communicate without having to\nfind a nurse directly",
      description:
        "CareMinder allows patients to send questions and requests to nurses through a tablet attached to the bed. There's no longer a need to stop passing nurses or go find them directly to ask questions or make requests.",
    },
    smartBed: {
      title: "CareMinder SmartBed",
      description1:
        "Patients can view their treatment status or hospital information on the home screen according to the nurse's settings.",
      description2:
        "Patients can check the current congestion level of the hospital through 'Currently accumulated requests' or 'Notices' displayed on the main screen.",
    },
    voiceRecognition: {
      title: "Request by Voice",
      description: "CareMinder primarily uses voice recognition functionality.",
      usability: {
        title: "Convenient Usability",
        description1:
          "We've improved accessibility for elderly patients who are unfamiliar with digital devices or patients who find typing inconvenient.",
        description2: "Input content is initially processed to verify that it's a valid voice request.",
      },
      ai: {
        title: "AI Automatic Classification",
        description1:
          "Request content is automatically forwarded to relevant staff such as nurses or nursing assistants through AI learning.",
        description2:
          "Since each hospital accumulates different learning datasets, the AI gradually develops a classification system tailored to each hospital's system.",
      },
    },
    messaging: {
      title: "Messaging with Nurses",
      description1:
        "Nurses can send messages to patients. They can obtain additional information about requirements, and for information-related matters, they can resolve issues through messaging without having to visit the patient directly.",
      description2:
        "Messages sent by nurses automatically appear as popups and notifications on the patient's screen, creating smooth communication.",
      description3:
        "Patients can check specific details about their questions and requests. They can view the current status of each item (waiting, in progress, completed), time, and message content with nurses.",
    },
    groupware: {
      title: "CareMinder Groupware\nCreating an environment to focus on core duties",
      description:
        "CareMinder systematizes communication and task distribution between patients and nursing staff, automatically distributing patient requests and questions to appropriate personnel, and supporting convenient non-face-to-face two-way communication with patients.",
      feature1: {
        title: "Efficient patient request classification\nautomatically categorized by task",
      },
      feature2: {
        title: "Simple messaging that allows communication\nwith patients without visiting them directly",
      },
    },
    features: {
      title: '"CareMinder Groupware" supports the following features',
      description:
        "We briefly introduce features by category, from currently supported integration and provision features to upcoming features.",
      items: [
        {
          title: "Patient Notes",
          description: "Record and share memories and additional information about patients that should be referenced.",
        },
        {
          title: "Patient Status Bar Control",
          description:
            "Decide whether to display a status bar on the patient page that allows patients to check their remaining treatment and current progress.",
        },
        {
          title: "Hospital Notice Creation",
          description: "Create hospital notice content that will automatically loop on the patient page.",
        },
        {
          title: "NFC Tagging",
          description: "If desired, security can be enhanced through ID/password or NFC tagging.",
        },
        {
          title: "Statistics",
          description: "Obtain statistics on information and tasks for each patient and nursing staff.",
        },
      ],
    },
    cta: {
      title: "Create a more efficient hospital environment with CareMinder",
      description: "Smart solutions that improve nursing staff efficiency and enhance patient experience",
      button: "Contact Us",
    },
  },
}

