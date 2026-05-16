import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles = {} } = attributes;

  const mainSl = `#${id}`;
  const sectionSl = `${mainSl} .tsbo_galaxy-section`;
  const tagSl = `${sectionSl} .tsbo_eyebrow`;
  const titleSl = `${sectionSl} .tsbo_title`;
  const subTitleSl = `${sectionSl} .tsbo_lede`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		  ${getTypoCSS("", styles?.header?.typo)?.googleFontLink}
		  ${getTypoCSS("", styles?.header?.title?.typo)?.googleFontLink}
		  ${getTypoCSS("", styles?.header?.subTitle?.typo)?.googleFontLink}

		     ${getTypoCSS(tagSl, styles?.header?.typo)?.styles}
			 ${getTypoCSS(titleSl, styles?.header?.title?.typo)?.styles}
			 ${getTypoCSS(subTitleSl, styles?.header?.subTitle?.typo)?.styles}
		
		 ${sectionSl} {
            ${getBackgroundCSS(styles?.bg)}
			min-height: ${styles?.height || "100vh"};
			border-radius:${getBoxCSS(styles?.radius)};
        }

		${tagSl}{
			color: ${styles?.header?.color};
			padding: ${getBoxCSS(styles?.header?.padding)};
			border-radius: ${getBoxCSS(styles?.header?.radius)};
		}
		${titleSl}{
			color: ${styles?.header?.title?.color};
	
		}
		${subTitleSl}{
			color: ${styles?.header?.subTitle?.color};
	
		}
	`,
      }}
    />
  );
};
export default Style;
