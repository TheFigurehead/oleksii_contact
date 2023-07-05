import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import style from './menu.module.scss';

import imageSrc from '../../assets/img/my_photo.jpg';

export const Menu = () => {
  return (
    <NavigationMenu.Root className={style.NavigationMenuRoot}>
      <NavigationMenu.List className={style.NavigationMenuList}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={style.NavigationMenuTrigger}>
            Me <CaretDownIcon className={style.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={style.NavigationMenuContent}>
            <ul className={classNames(style.List, style.one)}>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className={classNames(style.Callout)} href="https://www.linkedin.com/in/shkapenko-oleksii/">
                    <img src={imageSrc} alt="Oleksii Shkapenko" />
                    <div className={style.CalloutWrapper}>
                      <div className={style.CalloutHeading}>Oleksii Shkapenko</div>
                      <p className={style.CalloutText}>Web developer, truly coding lover</p>
                    </div>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={style.NavigationMenuTrigger}>
            Overview <CaretDownIcon className={style.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={style.NavigationMenuContent}>
            <ul className={classNames(style.List, style.two)}>
              <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/docs/primitives/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className={style.NavigationMenuLink} href="https://github.com/TheFigurehead">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={style.NavigationMenuIndicator}>
          <div className={style.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={style.ViewportPosition}>
        <NavigationMenu.Viewport className={style.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
};

interface ListItemProps{
  className?: string;
  children?: React.ReactNode;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, children, title, ...props }: ListItemProps, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames(style.ListItemLink, className)} {...props} ref={forwardedRef}>
        <div className={style.ListItemHeading}>{title}</div>
        <p className={style.ListItemText}>{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));