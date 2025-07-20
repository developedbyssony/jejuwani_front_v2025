import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Td = styled.td`
  display: block;
  padding: 0 5px;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tdd = styled.td`
  display: block;
  align-items: center;
  white-space: nowrap;
  width: 350px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tg = styled.td`
  display: block;
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 10px;
`;

const posts = ({ posts, reverse, onIncrease }) => {
    const history = useNavigate();
    const p = posts.filter((n) => n.id < 101);
    return (
        <>
            {p.map(function (post, index) {
                const view_url = `/detail2/${post.id}`;
                const postId = post.id;
                const postHit = post.hit;
                return (
                    <tr class="table-tr" key={index}>
                        <th className="table-col">{post.id}</th>
                        <td className="table-col" value={post.id}>
                            <Tdd
                                onClick={() => {
                                    history(
                                        view_url, {
                                        state: { post: post },
                                    });
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                            >
                                {post.title}
                            </Tdd>
                        </td>
                        <td className="table-col">
                            <Td>{post.region}</Td>
                        </td>
                        <td className="table-col">{post.regdate}</td>
                        <td className="table-col">
                            <div id={index}>{post.like}</div>
                        </td>
                        <td className="table-col">{post.hit}</td>
                        <td className="table-col">
                            <Tg>
                                {post.tag.split(',').slice(0, 4).map((el, index) =>
                                    <strong className="tag-sale text-style-13" style={{ marginRight: "7px" }}>
                                        {el.trim()}
                                    </strong>
                                )}
                            </Tg>
                        </td>
                    </tr >
                );
            })}
        </>
    );
};

export default posts;
