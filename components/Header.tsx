interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>Hey there 👋!</p>

      <p>
        We&apos;re <a href="https://aexol.com">Aexol</a>, a technology-first
        company&apos;s best friend. We love building mobile apps, web apps, SaaS
        tools, open-source &amp; blazingly fast e-commerce solutions based on
        Vendure!
      </p>
    </>
  );
}
