
const caseDataPageConfig = {
  id: "caseDataPage",
  titleKey: "caseDataPage.mainTitle",
  subtitleKey: "caseDataPage.mainSubtitle",
  dataPath:  "/data/caseData.csv",

  controls: {
    virusToggle: true, 
    viewToggle: false,
  },

  summary: {
    title: "Page Overview",
    markdownPath: "/content/sections/caseDataSectionText.md",
    lastUpdated: "05/01/2025",
    showTrendArrow: true,
    showSecondayTitle: false,

    metricLabel: "cases", // Used when no viewToggle
  },
  sections: [
    {
      id: "case-reports-season",
      title: "caseDataPage.charts.seasonalComparison.title",
      subtitle: "caseDataPage.charts.seasonalComparison.subtitle",
      infoIcon: true,
      downloadIcon: true,
      trendEnabled: true, 
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Season",
        markdownPath: "/content/modals/cases-explainer.md"
      },
      chart: {
      type: "lineChart",
      props: {
        dataSourceKey: "seasonalCaseTrends",
        seasonal: true,
        title: "Laboratory-reported cases of {virus}",
        metricName: "{virus} cases",
        submetric: "Total", // explicitly set for non-grouped
        xField: "dayOfSeason",
        yField: "value",
        colorField: "season",
        tooltipFields: ["date", "value"],
        defaultDisplay: "Number", 
        columnLabels: {
          date: "Week",
          value: "Number of Cases",
        }
      }
      }
    },
  
    
    {
      id: "case-reports-test-type",
      title: "caseDataPage.charts.reportsByTestType.title",
      showIfVirus: "COVID-19", 
      // subtitle: "Cases for {virus} are {trend} this week than last week.",
      infoIcon: true,
      downloadIcon: true,
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Test Type",
        markdownPath: "/content/modals/cases-explainer.md",
      },
      chart: {
        type: "yearComparisonChart",
        props: {
          dataSourceKey: "casesByType",
          metricName: "{virus} cases by test type",
          title: "Laboratory-reported cases of {virus}",
          groupField: "submetric",
          field: "isoWeek",
          yField: "value",
          colorField: "submetric",
          tooltipFields: ["date", "submetric", "value"],
          defaultDisplay: "Number", 
          legendTitle: "Type",
          showRollingAvg: false,
          customColorScale: {
            domain: ["Confirmed", "Probable"],
            range: ["#4F32B3", "#9CA3AF"],
          },
          columnLabels: {
            date: "Week",
            value: "Number of Cases",
            submtric: "Test Type",
          }
        }
      },
    },

    {
      id: "case-reports-subtype",
      title: "caseDataPage.charts.reportsBySubtype.title",
      subtitle: "caseDataPage.charts.reportsBySubtype.subtitle",
      showIfVirus: "Influenza", 
      infoIcon: true,
      downloadIcon: true,
      trendEnabled: true, 
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Subtype",
        markdownPath: "/content/modals/cases-explainer.md"
      },
      chart: {
      type: "yearComparisonChart",
      props: {
        dataSourceKey: "casesBySubType",
        title: "Laboratory-reported cases of {virus}",
        metricName: "{virus} cases by subtype",
        groupField: "submetric",
        xField: "date",
        yField: "value",
        colorField: "submetric",
        tooltipFields: ["date", "value"],
        defaultDisplay: "Number", 
        legendTitle: "Subtype",
        showRollingAvg: false, 
        customColorScale: {
          domain: ["Influenza A not subtyped", "Influenza A H1", "Influenza A H3", "Influenza B" ],
          range: ["#3F007D", "#6A51A3", "#807DBA", "#9E9AC8"],
        },
        columnLabels: {
          date: "Week",
          value: "Number of Cases",
          submtric: "Subtype"
        }
      }
      }
    },

    {
      id: "case-reports-age",
      title: "caseDataPage.charts.reportsByAge.title",
      // subtitle: "Cases for {virus} are {trend} this week than last week.",
      infoIcon: true,
      downloadIcon: true,
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Age Group",
        markdownPath: "/content/modals/cases-explainer.md",
      },
      chart: {
        type: "smallMultipleBarChart",
        props: {
          dataSourceKey: "casesByAge",
          seasonal: null,
          metricName: "{virus} cases by age group",
          groupField: "submetric",
          xField: "date",
          yField: "value",
          colorField: "submetric",
          tooltipFields: ["date", "submetric", "value"],
          defaultDisplay: "Number", 
          customColor: '#4F32B3',
          columnLabels: {
            date: "Week",
            value: "Number of Cases",
            submtric: "Age Group"
          }

        }
      },
    },
    {
      id: "case-reports-borough",
      title: "caseDataPage.charts.reportsByBorough.title",
      // subtitle: "Cases for {virus} are {trend} this week than last week.",
      infoIcon: true,
      downloadIcon: true,
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Borough",
        markdownPath: "/content/modals/cases-explainer.md",
      },
      chart: {
        type: "smallMultipleBarChart",
        props: {
          dataSourceKey: "casesByBorough",
          seasonal: null,
          metricName: "{virus} cases by borough",
          groupField: "submetric",
          xField: "date",
          yField: "value",
          colorField: "submetric",
          tooltipFields: ["date", "submetric", "value"],
          defaultDisplay: "Number",
          columnLabels: {
            date: "Week",
            value: "Number of Cases",
            submtric: "Borough"
          } 

        }
        // footer: "Source: NYC Health Department Syndromic Surveillance",
      },
    },
    {
      id: "case-reports-re",
      title: "caseDataPage.charts.reportsByRE.title",
      showIfVirus: "COVID-19", 
      // subtitle: "Cases for {virus} are {trend} this week than last week.",
      infoIcon: true,
      downloadIcon: true,
      animateOnScroll: true,
      modal: {
        title: "{virus} Laboratory Reports by Race and Ethnicity",
        markdownPath: "/content/modals/cases-explainer.md",
      },
      chart: {
        type: "lineChart",
        props: {
          dataSourceKey: "casesByRE",
          seasonal: null,
          metricName: "{virus} cases by race and ethnicity",
          groupField: "submetric",
          xField: "date",
          yField: "value",
          colorField: "submetric",
          tooltipFields: ["date", "submetric", "value"],
          defaultDisplay: "Number", 
          columnLabels: {
            date: "Week",
            value: "Number of Cases",
            submtric: "Race & Ethnicity"
          }

        }
        // footer: "Source: NYC Health Department Syndromic Surveillance",
      },
    },
  ],
};

export default caseDataPageConfig;
