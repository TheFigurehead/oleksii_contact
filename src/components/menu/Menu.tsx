import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import style from './menu.module.scss';

export const Menu = () => {
  return (
    <NavigationMenu.Root className={style.NavigationMenuRoot}>
      <NavigationMenu.List className={style.NavigationMenuList}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={style.NavigationMenuTrigger}>
            Learn <CaretDownIcon className={style.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={style.NavigationMenuContent}>
            <ul className={classNames(style.List, style.one)}>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className={classNames(style.Callout)} href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className={style.CalloutHeading}>Radix Primitives</div>
                    <p className={style.CalloutText}>Unstyled, accessible components for React.</p>
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
          <NavigationMenu.Link className={style.NavigationMenuLink} href="https://github.com/radix-ui">
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