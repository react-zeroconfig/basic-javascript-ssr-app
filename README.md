# Start development

```bash
npm start
```

# Build

```bash
npm run build
```

# NginX config sample

```bash
pm2 start /project/dist/app/server
```

Start Node.js server (with PM2) 

```
server {
  set $STATIC_FILES /{project-root}/dist/app/browser;
  set $SERVER_PORT 4100;

  listen       9100;
  server_name  localhost;

  # SSR proxy
  location / {
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header Connection "";
    proxy_http_version 1.1;

    proxy_pass http://127.0.0.1:$SERVER_PORT;
  }

  # Static files
  location ~ ^/(.*)\.(.*)$ {
    root $STATIC_FILES;
    autoindex off;
    expires off;
  }
}
```

Add NginX server config

# Source Import Sample

## Jest 
<!-- import src/__tests__/*.{js,jsx} --title-tag h3 -->
<h3>src/__tests__/e2e.js</h3>
```js
import puppeteer from 'puppeteer';

describe('E2E Sample', () => {
  test('Test', async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3100');
    await page.waitForSelector('#app > h1');
    
    await expect(page.$eval('#app > h1', e => e.innerHTML)).resolves.toEqual('SERVER VALUE');
    
    await browser.close();
  });
});
```
<h3>src/__tests__/sample.js</h3>
```js
describe('Sample', () => {
  test('Test', () => {
    expect('text').toEqual('text');
  });
});
```
<!-- importend -->

<!-- import src/**/*.test.{js,jsx} --title-tag h3 -->
<!-- importend -->

## Storybook
<!-- import src/**/*.stories.{js,jsx} --title-tag h3 -->
<h3>src/app/components/Title.stories.jsx</h3>
```jsx
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Title } from './Title';

storiesOf('Title', module)
  .add('text=Hello?', () => (
    <Title text="Hello?"/>
  ))
  .add('text=World?', () => (
    <Title text="World?"/>
  ));
```
<!-- importend -->