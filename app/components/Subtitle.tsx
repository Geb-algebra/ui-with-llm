import React from 'react';

export default function ServiceName(props: { children: React.ReactNode }) {
  return <h1 className="font-bold text-xl text-primary py-8">{props.children}</h1>;
}
