import { render } from '@testing-library/react';
import ArticleCard from '@/components/article-card/ArticleCard';

import styles from '@/components/article-card/ArticleCard.module.scss';

describe('ArticleCard', () => {
  const sampleProps = {
    image:
      '"https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg',
    title: 'Article title',
    description: 'Description of the article. Long description for testing.',
    link: 'https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace',
  };

  it('renders without error', () => {
    const { container } = render(<ArticleCard {...sampleProps} />);
    expect(container).toBeInTheDocument();
  });

  it('renders image, title and description', () => {
    const { getByAltText, getByText } = render(
      <ArticleCard {...sampleProps} />,
    );
    const imageElement = getByAltText('Article title');
    const titleElement = getByText('Article title');
    const descriptionElement = getByText(
      'Description of the article. Long description for testing.',
    );

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('contains a "Read more" link for a long description', () => {
    const { getByText } = render(<ArticleCard {...sampleProps} />);
    const readMoreLink = getByText('Read more');

    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute(
      'href',
      'https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace',
    );
    expect(readMoreLink).toHaveAttribute('target', '_blank');
    expect(readMoreLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<ArticleCard {...sampleProps} />);
    const cardWrapper = container.querySelector(
      `.${styles['article-card-wrapper']}`,
    );
    const image = container.querySelector(`.${styles.image}`);
    const info = container.querySelector(`.${styles.info}`);
    const title = container.querySelector(`.${styles.title}`);
    const description = container.querySelector(`.${styles.description}`);

    expect(cardWrapper).toHaveClass(styles['article-card-wrapper']);
    expect(image).toHaveClass(styles.image);
    expect(info).toHaveClass(styles.info);
    expect(title).toHaveClass(styles.title);
    expect(description).toHaveClass(styles.description);
  });
});
