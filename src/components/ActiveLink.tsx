import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps){
    const { asPath } = useRouter();

    let isActive = false;

    if(asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as))){
        isActive = true;
    }

    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    );
}