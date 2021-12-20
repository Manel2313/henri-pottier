
module.exports = {
  reactStrictMode: true,
  cleanDistDir: false,
  // sassOptions: {
  //   prependData: `@import "@styles/shared.scss";`,
  // },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            prettier: true,
            template: ({ template }, opts, { componentName, imports, jsx, props }) => template.ast`
              ${imports}
              import {withIcon} from '@components/icon/icon';
          
              const ${componentName} = (${props}) => {
               
          
                return ${jsx};
              };
              export default withIcon(${componentName});
            `,
          },
        },
      ], // i  can import direct svg icon
    });
    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};
