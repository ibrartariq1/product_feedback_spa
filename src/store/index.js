import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    settings: {},
    product: "",

    teams: {
      Acoerela: {
        id: 0,
        name: "Acoerela",
        title: "Delivering Excellence Through Dyes",
        description: `<p><span class='h5 b-400'>Acoerela</span> makes and sells dyes that made detection of exosomes simple and easy. With our dyes, unlike the others, there is no need to differentiate background noise from signal. It eliminates the common frustration that exosome researchers are suffering. Our patented unique chemistry underlies our dye products platform. We will be building the technology as the gold standard for exosomes quality control, which has seen a rising demand for drug delivery and disease diagnosis.</p>`,
        meeting: "https://calendly.com/acoerela/acoerela",
        logo: "Acoerela/brand-logo.png",
        download: "Acoerela.pdf",
        product: [
          {
            thumbnail: "Acoerela/product.png",
            link: "Acoerela/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Acoerela/team-members/member-1.png",
          },
          {
            thumbnail: "Acoerela/team-members/member-2.png",
          },
          {
            thumbnail: "Acoerela/team-members/member-3.png",
          },
          {
            thumbnail: "Acoerela/team-members/member-4.png",
          },
        ],
      },
      Actly: {
        id: 1,
        name: "Actly",
        title: "Care beyond the Clinic",
        description: `<p>Attention-deficit/hyperactivity disorder (ADHD) is a chronic condition that affects millions of children and often continues into adulthood. In Singapore, up to 16% of children are estimated to have ADHD. To ensure a better future for these children, therapists' early intervention with timely and accurate information is crucial. However, traditional methods of collecting data are proving inadequate for planning and providing high quality care.</p>
          <p>Actly's patent-pending Sentiment Analysis AI measures empathy in communication from markers like Emotions, Conciseness, and Modulation and provides critical information about the children's behaviour outside the clinic environment. With these insightful data, therapists can deliver higher quality care for these children with higher engagement</p>`,
        meeting: "https://calendly.com/actly/grip7",
        logo: "Actly/brand-logo.png",
        download: "Actly.pdf",
        product: [
          {
            thumbnail: "Actly/product.png",
            link: "Actly/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Actly/team-members/member-1.png",
          },
          {
            thumbnail: "Actly/team-members/member-2.png",
          },
          {
            thumbnail: "Actly/team-members/member-3.png",
          },
        ],
      },
      Biotrack: {
        id: 2,
        name: "Biotrack",
        title: "Redefining Cardiac Monitoring",
        description: `<p>200 million people are affected by cardiac diseases in APAC yearly and ECGs are vital in deciding the course of treatment. However, the current process of taking ECGs are inefficient and prone to missing out infrequent symptoms or emergencies. Therefore, Biotrack has developed a portable ECG which continuously monitors a patient&rsquo;s cardiac condition and is integrated with AI diagnostic algorithms to support doctors' diagnoses, while simultaneously reducing nursing workload.</p>`,
        meeting: "https://calendly.com/biotrack/biotrack",
        logo: "Biotrack/brand-logo.png",
        download: "Biotrack.pdf",
        product: [
          {
            thumbnail: "Biotrack/product.png",
            link: "Biotrack/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Biotrack/team-members/member-1.png",
          },
          {
            thumbnail: "Biotrack/team-members/member-2.png",
          },
          {
            thumbnail: "Biotrack/team-members/member-3.png",
          },
        ],
      },
      CRecTech: {
        id: 3,
        name: "CRecTech",
        title:
          "Reinventing Steam Methane Reforming Catalyst for Low-Carbon Hydrogen Production",
        description: `<p>CRecTech has developed a greener Steam Methane Reforming (SMR) catalyst technology for low-carbon hydrogen production. Our novel CRecREF<sup>TM</sup> catalysts have superior protection against catalyst deactivation, thus allowing unprecedented dryer Steam Methane Reforming with lesser steam input for greater day-to-day operational savings. We bring greater peace of mind on producing hydrogen more economically while enjoying carbon dioxide emissions reduction, thereby accelerating the energy transition to greener hydrogen. We aim to decarbonize industries with our low-carbon hydrogen and carbon dioxide utilization technology.</p>`,
        meeting: "https://calendly.com/crectech/crectech",
        logo: "CRecTech/brand-logo.png",
        download: "CRecTech.pdf",
        product: [
          {
            thumbnail: "CRecTech/product.png",
            link: "CRecTech/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "CRecTech/team-members/member-1.png",
          },
          {
            thumbnail: "CRecTech/team-members/member-2.png",
          },
        ],
      },
      Florisense: {
        id: 4,
        name: "Florisense",
        title: "Sense to Perfection",
        description: `<p>Manufacturers are currently burdened with expensive quality testing tools for identifying the smell sensing profile of their flavour and fragrance products. The standard practices are either time-consuming or generating inconsistent outcome due to manual sensory evaluation. We have developed an affordable and smart sensing technology &ldquo;Florisense" that can operate up to 30x faster than the current practice. The automated analysis of our sensing platform helps manufacturers achieve consistent quality of their products by enhancing reliability of the process throughput and without subjective human intervention.</p>`,
        meeting: "https://calendly.com/gokul-florisense/florisense",
        logo: "Florisense/brand-logo.png",
        download: "Florisense.pdf",
        product: [
          {
            thumbnail: "Florisense/product.png",
            link: "Florisense/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Florisense/team-members/member-1.png",
          },
          {
            thumbnail: "Florisense/team-members/member-2.png",
          },
        ],
      },
      Keptan: {
        id: 5,
        name: "Keptan",
        title: "Empowering Learning",
        description: `<p>Personalised learning produces far better results than the traditional one-size-fits all approach. Yet, few educational institutions are able to offer any meaningful degree of personalised learning to their students. This is due to the significant increase in workload required by teachers to adopt the curriculum and deliver true personalised learning to students. Keptan has solved this problem with our solution which allows scalable personalised learning for all types of educational institutions. Using state-of-the-art, patent-pending AI algorithms and an easy-to-use, no code platform, we empower teachers and optimise student learning journeys.</p>`,
        meeting: "https://calendly.com/keptan/keptan",
        logo: "Keptan/brand-logo.png",
        download: "Keptan.pdf",
        product: [
          {
            thumbnail: "Keptan/product.png",
            link: "Keptan/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Keptan/team-members/member-1.png",
          },
          {
            thumbnail: "Keptan/team-members/member-2.png",
          },
        ],
      },
      Liloss: {
        id: 6,
        name: "Liloss",
        title: "Eating fats with no guilt",
        description: `<p>Eating too much high-fat food may result in weight gain and poses risks to the health. Liloss has developed a patent-pending technology to extract specialised functional ingredients from vegetables which can mitigate fat digestion and reduce the fat absorbed into our body. The ingredients are all natural and safe for consumption. With Liloss ingredients, consumers can now enjoy delicious ice cream and potato chips guilt-free. Liloss aims to formulate the powerful ingredients into novel health supplements and functional foods.</p>`,
        meeting: "https://calendly.com/liloss/liloss",
        logo: "Liloss/brand-logo.png",
        download: "Liloss.pdf",
        product: [
          {
            thumbnail: "Liloss/product.png",
            link: "Liloss/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Liloss/team-members/member-1.png",
          },
          {
            thumbnail: "Liloss/team-members/member-2.png",
          },
        ],
      },
      Metallica: {
        id: 7,
        name: "Metallica",
        title: "Adding value to precious metals",
        description: `<p>Metallica is disrupting the recycling of precious metals industry with the world&rsquo;s first scalable bio-recovery of Platinum Group Metals (PGM) without the need for extremely high temperatures and aggressive chemicals.</p>
          <p>Metallica&rsquo;s bio-metallurgical innovation consumes about 6X less energy compared to conventional recycling including pyrometallurgy and hydrometallurgy. Our technology also reduces capital expenditures and downstream processing costs with near-zero waste and lower carbon emissions. Metallica's solution boasts of a truly green, clean, and sustainable approach.</p>`,
        meeting: "https://calendly.com/metallica-pgm/metallica",
        logo: "Metallica/brand-logo.png",
        download: "Metallica.pdf",
        product: [
          {
            thumbnail: "Metallica/product.png",
            link: "Metallica/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Metallica/team-members/member-1.png",
          },
          {
            thumbnail: "Metallica/team-members/member-2.png",
          },
          {
            thumbnail: "Metallica/team-members/member-3.png",
          },
        ],
      },
      Mindful_Drinks: {
        id: 8,
        name: "Mindful Drinks",
        title: "Better Drinks. Better Planet",
        description: `<p>Mindful Drinks is first in the world to ferment spent coffee grounds into low-calories alcoholic beverages with functional and digestive benefits. Using our patented fermentation technology, we are able to upcycle coffee grounds and create a range of tasty low alcohol beverages that contain natural compounds like polyphenols and alkaloids which exhibit various health benefits to our bodies. Our bottled drinks are also infused with a range of fun and unique flavours to tickle any discerning palette.</p>`,
        meeting: "https://calendly.com/mindfuldrinks/mindful-drinks",
        logo: "Mindful_Drinks/brand-logo.png",
        download: "Mindful Drinks.pdf",
        product: [
          {
            thumbnail: "Mindful_Drinks/product.png",
            link: "Mindful_Drinks/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Mindful_Drinks/team-members/member-1.png",
          },
          {
            thumbnail: "Mindful_Drinks/team-members/member-2.png",
          },
          {
            thumbnail: "Mindful_Drinks/team-members/member-3.png",
          },
        ],
      },
      "N-Brane": {
        id: 9,
        name: "N-Brane",
        title:
          "Sustainable solvent recovery solution enabled by novel membrane technology",
        description: `<p>In the semiconductor industry, all solvents waste from the manufacturing processes are sent to waste treatment companies and disposed of after treatment. These solvents are expensive and the price is growing annually. However, the current waste management strategy in the semiconductor industry is unsustainable both economically and environmentally. N-Brane&rsquo;s membrane technology provides a green solution to recover these solvents at high purity and low carbon footprint. The recovery solution will save the cost of semiconductor manufacturers from purchasing fresh solvents and significantly reduce the waste generated from their facilities.</p>`,
        meeting: "https://calendly.com/nbrane/n-brane",
        logo: "N-Brane/brand-logo.png",
        download: "N-Brane.pdf",
        product: [
          {
            thumbnail: "N-Brane/product.png",
            link: "N-Brane/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "N-Brane/team-members/member-1.png",
          },
          {
            thumbnail: "N-Brane/team-members/member-2.png",
          },
          {
            thumbnail: "N-Brane/team-members/member-3.png",
          },
        ],
      },
      nDots: {
        id: 10,
        name: "nDots",
        title: "Bringing Talents To The Future Of Work",
        description: `<p>nDots empowers talents and companies towards the &ldquo;Future of Work&rdquo; using the best of AI and Knowledge Graphs. Our platform does talent matching, mapping and management to enable companies to find the perfect match and to continuously engage the talents to persistently and continuously create, record and upgrade their skills. Our AI values talents&rsquo; knowledge at various levels and offers actionable insights to stakeholders such as talent heatmap to recruiters, skill gap analysis to talents, competitive analytics to learners.</p>`,
        meeting: "https://calendly.com/contact-ndots/ndots",
        logo: "nDots/brand-logo.png",
        download: "nDots.pdf",
        product: [
          {
            thumbnail: "nDots/product.png",
            link: "nDots/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "nDots/team-members/member-1.png",
          },
          {
            thumbnail: "nDots/team-members/member-2.png",
          },
        ],
      },
      Only_Technologies: {
        id: 11,
        name: "Only Technologies",
        title:
          "Transforming driving behavioural data into actionable business insights!",
        description: `<p>Insurers have struggled to maintain consistent underwriting profits from their auto insurance businesses. There is an existential need for auto insurers to better price premiums by understanding individual driving behaviours. However, existing methods for collecting the necessary data to enable such selective pricing are cumbersome, unreliable and expensive. The patent-pending Only Technologies solution is able to collect the cleanest source of driving behavioural data at 20 percent of the usual cost and empower insurers with actionable insights that can supercharge their underwriting profits. Our Only Insure platform will also serve as a comprehensive rewards and incentive management tool for our insurance ecosystem partners.</p>`,
        meeting: "https://calendly.com/onlytechnologies-5727/onlytechnologies",
        logo: "Only_Technologies/brand-logo.png",
        download: "Only-Technologies.pdf",
        product: [
          {
            thumbnail: "Only_Technologies/product.png",
            link: "Only_Technologies/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Only_Technologies/team-members/member-1.png",
          },
          {
            thumbnail: "Only_Technologies/team-members/member-2.png",
          },
          {
            thumbnail: "Only_Technologies/team-members/member-3.png",
          },
        ],
      },
      Power_Facade: {
        id: 12,
        name: "Power Facade",
        title: "Transform Our Buildings and Produce Clean Energy",
        description: `<p>Companies worldwide are subject to Environmental, Social and Governance (ESG) requirements due to worldwide CO2 reduction targets. As with many countries, both Singapore and China have implemented various building regulations to meet these targets. However, current Building-Integrated Photovoltaic (BIPV) technology is inefficient and has a long-term payback period. We at Power Façade have developed high-efficiency coloured PV modules and prefabricated unitized BIPV wall solutions to improve power generation efficiency. Our BIPV generated energy can offset the building’s carbon emissions and overall energy consumption. Our innovation features high design flexibility that spans from the PV module level to the entire building integration level. We also feature coloured and patterned panels that allow a greater scope and range of application on building façades.</p>`,
        meeting: "https://calendly.com/powerfacade/power-facade",
        logo: "Power_Facade/brand-logo.png",
        download: "Power-Facade.pdf",
        product: [
          {
            thumbnail: "Power_Facade/product.png",
            link: "Power_Facade/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Power_Facade/team-members/member-1.png",
          },
          {
            thumbnail: "Power_Facade/team-members/member-2.png",
          },
        ],
      },
      PrimeGrowth: {
        id: 13,
        name: "PrimeGrowth Technologies",
        title: "Growing cells cheaper, better, faster",
        description: `<p>Cultivated meat promises a clean and green protein alternative to conventional meat farming and has attracted significant investment recently. However, the industry is unable to scale due to cost, ethical and process challenges due to expensive growth factors, use of animal serum and high cell mortality.</p>
          <p>PrimeGrowth has developed a patent pending Cell Priming technology which significantly reduces use of growth factors and serum while reducing cell mortality by 50%, leading to 70% cost saving. We provide Cell Priming Services on client&rsquo;s cell lines and deliver healthier and cheaper bioreactor feedstock to enable production scaleup.</p>`,
        meeting:
          "https://calendly.com/primegrowthtech/primegrowth-technologies",
        logo: "PrimeGrowth/brand-logo.png",
        download: "PrimeGrowth-Technologies.pdf",
        product: [
          {
            thumbnail: "",
            link: "",
          },
        ],
        team_members: [
          {
            thumbnail: "PrimeGrowth/team-members/member-1.png",
          },
          {
            thumbnail: "PrimeGrowth/team-members/member-2.png",
          },
          {
            thumbnail: "PrimeGrowth/team-members/member-3.png",
          },
          {
            thumbnail: "PrimeGrowth/team-members/member-4.png",
          },
        ],
      },
      ProlegoMiR: {
        id: 14,
        name: "ProlegoMiR",
        title:
          "Guiding Cancer Treatment Choices With Simple To Use Biomarker Tests",
        description: `<p>Getting ahead of cancer is crucial no matter where people are in their cancer fighting journey. Our vision is to help people make more informed decisions for treatment personalisation. At ProlegoMiR, we focus on developing and commercialising simple, easy-to-use clinical diagnostic tests for cancer using a new class of biomarkers. Our diagnostic tests and clinical testing service provide physicians and patients with fast and accurate information on predicted benefits from therapy to deliver tailored treatment plans to achieve the best outcomes. 50% of diagnosed cancer patients undergo radiotherapy. However, a companion diagnostic test to access patient response to radiotherapy is still lacking. Our flagship proprietary biomarker panels for cervical and liver cancers provide accurate risk-benefit analysis based on predicted radiotherapy responses for patients with cancer. Our tests guide the prescription of personalised treatment plans for individual patients saving precious time and costs from over-treatment.</p>`,
        meeting: "https://calendly.com/enquiries-prolegomir/prolegomir",
        logo: "ProlegoMiR/brand-logo.png",
        download: "ProlegoMiR.pdf",
        product: [
          {
            thumbnail: "ProlegoMiR/product.png",
            link: "ProlegoMiR/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "ProlegoMiR/team-members/member-1.png",
          },
          {
            thumbnail: "ProlegoMiR/team-members/member-2.png",
          },
          {
            thumbnail: "ProlegoMiR/team-members/member-3.png",
          },
          {
            thumbnail: "ProlegoMiR/team-members/member-4.png",
          },
          {
            thumbnail: "ProlegoMiR/team-members/member-5.png",
          },
        ],
      },
      Scent_Analytics: {
        id: 15,
        name: "Scent Analytics",
        title: "Making sense out of scent",
        description: `<p>Every year, plant diseases and insects cost the global economy more than $300 billion, contributing to food losses and threatening our food security. In Singapore, farmers lose between 10-20% of their crop yield to diseases caused by viruses, bacteria, fungi and insects. This is equivalent to a loss of $55 million for Singapore if 30% of the crops are produced locally (sources: FAOSTAT). Scent Analytics has developed a sensing system to detect volatile chemicals released by distressed, diseased or pest-infested plants. Not only can our proprietary 24-hr real-time and non-invasive detection system help farmers pre-empt an outbreak in their farms, it also helps them track the growth and quality of their produce.</p>`,
        meeting: "https://calendly.com/scentanalytics/scent-analytics",
        logo: "Scent_Analytics/brand-logo.png",
        download: "Scent-Analytics.pdf",
        product: [
          {
            thumbnail: "Scent_Analytics/product.png",
            link: "Scent_Analytics/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Scent_Analytics/team-members/member-1.png",
          },
          {
            thumbnail: "Scent_Analytics/team-members/member-2.png",
          },
          {
            thumbnail: "Scent_Analytics/team-members/member-3.png",
          },
        ],
      },
      Seamless: {
        id: 16,
        name: "Seamless",
        title: "Reimagine Immersion",
        description: `<p>Seamless is adding 'touch and feel' to the Metaverse. Virtual reality applications have grown steadily in recent years. However, the absence of feeling remains a key issue in such interactions. Our patented technology allows users to physically feel objects, impacts and other interactions in virtual spaces, thus enabling the complete immersive experience. The Seamless platform aims to revolutionize how you interact and socialize in the ever-expanding universe of virtual and mixed reality applications: from fitness, through gaming and beyond. Seamless will make this potentially trillion-dollar market opportunity more tangible.</p>`,
        meeting: "https://calendly.com/seamlessxr/seamless",
        logo: "Seamless/brand-logo.png",
        download: "Seamless.pdf",
        product: [
          {
            thumbnail: "Seamless/product.png",
            link: "Seamless/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Seamless/team-members/member-1.png",
          },
          {
            thumbnail: "Seamless/team-members/member-2.png",
          },
          {
            thumbnail: "Seamless/team-members/member-3.png",
          },
        ],
      },
      WasteViz: {
        id: 17,
        name: "WasteViz",
        title: "Smartify recycling bins",
        description: `<p>WasteViz aims to increase the recycling rates of its customers by ensuring their consumers recycle properly. Currently in Singapore, 60% of waste disposed in recycling bins is contaminated and diverted to incineration plants due to irresponsible disposal practices. We have developed WasteBoard<sup>TM</sup>, a smart add-on that can be attached to any recycling bin and for any type of waste stream to address this problem. Using a computer vision-based AI software pipeline, WasteBoard<sup>TM</sup> analyses, classifies and gives on-site feedback to users in real-time. A dashboard connected to cameras and sensors allows our customers to monitor their waste management. WasteBoard<sup>TM</sup> is a non-intrusive and economic product designed to change consumer behaviour and provide necessary data to our customers to efficiently and accurately implement their waste management plans.</p>`,
        meeting: "https://calendly.com/wasteviz_2022/wasteviz",
        logo: "WasteViz/brandd-logo.png",
        download: "WasteViz.pdf",
        product: [
          {
            thumbnail: "WasteViz/product.png",
            link: "WasteViz/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "WasteViz/team-members/member-1.png",
          },
          {
            thumbnail: "WasteViz/team-members/member-2.png",
          },
          {
            thumbnail: "WasteViz/team-members/member-3.png",
          },
          {
            thumbnail: "WasteViz/team-members/member-4.png",
          },
        ],
      },
      Xfolio: {
        id: 18,
        name: "Xfolio",
        title: "Safe Diabetic Foot Exfoliator",
        description: `<p>Every 30 seconds, a leg is amputated due to complications arising from diabetic foot. Diabetic foot arises from bad foot hygiene and foot skin injuries. If the diabetic patients keep their foot skin fit, it largely prevents diabetic foot and amputations.</p>
          <p>Xfolio addresses the safety of exfoliation and maintenance of a healthy foot in diabetics. Xfolio auto-stops the exfoliation process at the optimum level, rejuvenating the skin without any injuries.</p>`,
        meeting: "https://calendly.com/xfolio-sg/xfolio",
        logo: "Xfolio/brand-logo.png",
        download: "Xfolio.pdf",
        product: [
          {
            thumbnail: "Xfolio/product.png",
            link: "Xfolio/product.png",
          },
        ],
        team_members: [
          {
            thumbnail: "Xfolio/team-members/member-1.png",
          },
          {
            thumbnail: "Xfolio/team-members/member-2.png",
          },
          {
            thumbnail: "Xfolio/team-members/member-3.png",
          },
        ],
      },
    },
  },
  mutations: {
    user(state, data) {
      console.log('userset')
      state.user = data;
     
    },
    settings(state, data) {
      state.settings = data;
    },
    setProduct(state, newValue) {
      state.product = newValue;
      console.log(state.product);
  },
  },
  actions: {
    updateProduct({ commit }, newValue) {
        commit('setProduct', newValue);
      },
},
getters: {
doubledValue: (state) => state.myValue * 2,
},
  modules: {},
});
