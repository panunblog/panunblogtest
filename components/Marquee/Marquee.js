import React from "react";
import styles from "./styles.module.scss";

export default function Marquee() {
  return (
    <div>
      <marquee className={styles.marquee}>
        You are seeing an optimized [-Test Version] version of the Panun Blog
        website.Currently,this platform is under development.Please leave your
        suggestions in the contact us section or on our e-mail
        :<a href="mailto:connect@panunblog.com"> connect@panunblog.com </a>
      </marquee>
    </div>
  );
}
