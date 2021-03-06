/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import siteSwitcherContent from '@ecl/ec-specs-site-switcher/demo/data';
import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data-simple';
import siteHeaderContent from '@ecl/ec-specs-site-header/demo/data';
import pageHeaderContent from '@ecl/ec-specs-page-header/demo/data-title-description';
import mediaContainerContent from '@ecl/ec-specs-media-container/demo/data--video';
import cardContent from '@ecl/ec-specs-card/demo/data--card';
import footerContent from '@ecl/ec-specs-footer/demo/data';

import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';
import StandardPage from '../StandardPage';

export default () => {
  const { items, ...breadcrumbProps } = breadcrumbContent;
  const breadcrumb = (
    <Breadcrumb {...breadcrumbProps}>
      {items.map(item => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  );
  pageHeaderContent.breadcrumb = breadcrumb;

  footerContent.identity = {};

  return (
    <StandardPage
      siteSwitcher={siteSwitcherContent}
      siteHeader={siteHeaderContent}
      pageHeader={pageHeaderContent}
      card={cardContent}
      footer={footerContent}
      mediaContainer={mediaContainerContent}
    />
  );
};
