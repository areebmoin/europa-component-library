/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

import Iframe from './Showcase/Iframe';
import styles from './Playground.scss';

const Playground = ({
  frameHeight,
  playgroundLink,
  system,
  selectedKind,
  selectedStory,
  showFrame,
  hideDemo,
  children,
}) => {
  if (!children) return null;

  const playgroundUrl =
    playgroundLink ||
    encodeURI(
      `/storybook/${system}/index.html?selectedKind=${selectedKind}&selectedStory=${selectedStory}&stories=1`
    );

  const fullFrameUrl =
    system && selectedKind && selectedStory
      ? encodeURI(
          `/storybook/${system}/iframe.html?selectedKind=${selectedKind}&selectedStory=${selectedStory}`
        )
      : '';

  return (
    <div className={styles.playground}>
      {!hideDemo && (
        <Fragment>
          {showFrame && fullFrameUrl ? (
            <Iframe url={fullFrameUrl} defaultHeight={frameHeight} />
          ) : (
            <div className={styles.showcase}>{children}</div>
          )}
        </Fragment>
      )}
      <ul
        className={classnames(styles.links, {
          [styles['links--showcase-hidden']]: hideDemo,
        })}
      >
        {playgroundUrl && (
          <li className={styles['link-item']}>
            <a
              href={playgroundUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
          </li>
        )}
        {fullFrameUrl && (
          <li className={styles['link-item']}>
            <a
              href={fullFrameUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullscreen
            </a>
          </li>
        )}
      </ul>
      <div className={styles.code}>
        <pre className={`${styles['code-pre']} language-html`}>
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                beautifyHtml(ReactDOMServer.renderToStaticMarkup(children), {
                  indent_size: 2,
                  wrap_line_length: 120,
                }),
                Prism.languages.html,
                'html'
              ),
            }}
          />
        </pre>
      </div>
    </div>
  );
};

Playground.propTypes = {
  children: PropTypes.node.isRequired,
  frameHeight: PropTypes.string,
  playgroundLink: PropTypes.string,
  showFrame: PropTypes.bool,
  hideDemo: PropTypes.bool,
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
};

Playground.defaultProps = {
  frameHeight: '200px',
  playgroundLink: '',
  showFrame: false,
  hideDemo: false,
  system: '',
  selectedKind: '',
  selectedStory: '',
};

export default Playground;
