import { Link } from "react-router-dom";

function Button({
  children,
  variant = "solid",
  to = null,
  href = null,
  onClick,
  type = "button",
  icon: Icon = null,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-ring";
  const variants = {
    solid: "bg-accent text-white hover:bg-accent2 hover:shadow-glow",
    outline: "border border-white/30 text-white hover:border-accent hover:text-accent",
    white: "bg-[#F4F4F4] text-black hover:bg-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  const handleClick = (event) => {
    if (href?.startsWith("#")) {
      event.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 96;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }

    onClick?.(event);
  };

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={classes}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
}

export default Button;
