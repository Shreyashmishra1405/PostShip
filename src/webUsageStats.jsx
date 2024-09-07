export const desktopOS = [
    {
      label: 'Exception',
      value: 72,
    },
    {
      label: 'Out for Delivery',
      value: 30,
    },
  ];
  
  export const mobileOS = [
    {
      label: 'Intransit',
      value: 70,
    },
    {
      label: 'Pending',
      value: 28,
    },
  ];
  
  export const platforms = [
    {
      label: 'Mobile',
      value: 59,
    },
    {
      label: 'Desktop',
      value: 40,
    },
  ];
  
  const normalize = (v: String, v2: String) => Number.parseInt(((v * v2) / 100).toFixed(2));
  
  export const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
      value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
      value: normalize(v.value, platforms[1].value),
    })),
  ];
  
  export const valueFormatter = (item: { value: number }) => `${item.value}%`;
  