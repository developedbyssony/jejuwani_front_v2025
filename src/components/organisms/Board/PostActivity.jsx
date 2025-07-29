import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../organisms/modals/modal";

const Td = styled.div`
  display: block;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tdd = styled.div`
  display: block;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tg = styled.td`
  display: block;
  width: 200px;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  padding-left: 0;
`;

const posts = ({ posts, loading, reverse }) => {
    const [openModalId, setOpenModalId] = useState(null);

    const handleModalToggle = (id) => {
        // 같은 걸 누르면 닫기, 다른 걸 누르면 해당 모달 열기
        setOpenModalId((prevId) => (prevId === id ? null : id));
    };

    const modalClose = () => {
        setModalOpen(!modalOpen);
    };

    const history = useNavigate();
    const p = posts.filter((n) => n.id < 100);
    return (
        <>
            {loading && <div> loading ... </div>}
            {posts.map(function (post, index) {
                const view_url = `/detail/${post.id}`;
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

                        <td className="table-col">
                            {post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                        </td>
                        <td className="table-col">{post.hit}</td>
                        <td className="table-col">
                            <Tg>
                                {post.tag.split(',').slice(0, 4).map((el, index) =>
                                    <span className="tag-sale text-style-13" style={{ marginRight: "7px" }}>
                                        {el.trim()}
                                    </span>
                                )}
                            </Tg>
                        </td>
                        <td className="table-col">
                            <div className="w-chip" onClick={() => handleModalToggle(post.id)}>
                                예약하기
                            </div>
                            {openModalId === post.id && (
                                <Modal
                                    modalClose={() => setOpenModalId(null)}
                                    id={post.id}
                                    title={post.title}
                                    region={post.region}
                                    price={post.price}
                                />
                            )}
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default posts;