import { useEffect } from "react";

export default function blogPost({ post, yourPost, sort }) {

    return (
        <div>
            <div className="blog-post-frame">
                <div className="blog-post-left">
                    <div className="blog-user-profile-img">
                        <img
                            src={post.imgSrc}
                            alt="블로그 이미지"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    {sort === 1 && (
                        <p className="tag-outline" id="comment-index">
                            감성 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                    {sort === 2 && (
                        <p className="tag-outline" id="comment-index">
                            가족과 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                    {sort === 3 && (
                        <p className="tag-outline" id="comment-index">
                            익사이팅 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                    {sort === 4 && (
                        <p className="tag-outline" id="comment-index">
                            힐링 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                    {sort === 5 && (
                        <p className="tag-outline" id="comment-index">
                            찐맛 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                    {sort === 6 && (
                        <p className="tag-outline" id="comment-index">
                            내추럴 제주 |{" "}
                            <p className="post-nick">
                                {post.nick}
                                {post.uid}
                            </p>
                        </p>
                    )}
                </div>
                <div className="blog-post-right">
                    <div className="user-new-post-contents"></div>
                </div>
            </div>
        </div>
    );
}